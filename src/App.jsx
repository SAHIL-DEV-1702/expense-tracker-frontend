import { useEffect, useState } from "react";
import axios from "axios";

const rawApiUrl = import.meta.env.VITE_API_URL?.trim().replace(/\/+$|\s+$/g, "") || "http://localhost:8000/api";

const API_URL = rawApiUrl.endsWith("/api") ? rawApiUrl : `${rawApiUrl}/api`;

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    amount: "",
    description: "",
    category: "",
    date: "",
  });

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(`${API_URL}/expenses`);
      setExpenses(response.data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Unable to load expenses right now.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let active = true;

    const loadExpenses = async () => {
      try {
        const response = await axios.get(`${API_URL}/expenses`);
        if (!active) return;
        setExpenses(response.data);
        setError("");
      } catch (err) {
        console.error(err);
        if (active) setError("Unable to load expenses right now.");
      } finally {
        if (active) setLoading(false);
      }
    };

    loadExpenses();

    return () => {
      active = false;
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const addExpense = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_URL}/expenses`, {
        ...form,
        amount: Number(form.amount),
      });

      setForm({ amount: "", description: "", category: "", date: "" });
      fetchExpenses();
    } catch (err) {
      console.error(err);
      setError("Please fill all fields correctly.");
    }
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`${API_URL}/expenses/${id}`);
      fetchExpenses();
    } catch (err) {
      console.error(err);
      setError("Could not delete this expense.");
    }
  };

  const totalExpense = expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <header className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Expense Tracker</p>
          <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">Track your spending</h1>
              <p className="mt-2 text-sm text-slate-600">Add an expense and review your latest activity in one place.</p>
            </div>
            <div className="rounded-xl bg-blue-50 px-4 py-3 text-right">
              <p className="text-sm text-slate-500">Total spent</p>
              <p className="text-2xl font-semibold text-blue-700">₹{totalExpense.toFixed(2)}</p>
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={addExpense} className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Add new expense</h2>
            <div className="mt-4 grid gap-4">
              <input
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                placeholder="Amount"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-0 focus:border-blue-500"
                required
              />
              <input
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-0 focus:border-blue-500"
                required
              />
              <input
                type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Category"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-0 focus:border-blue-500"
                required
              />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-0 focus:border-blue-500"
                required
              />
            </div>
            <button className="mt-5 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700">
              Add Expense
            </button>
          </form>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recent expenses</h2>
              <span className="text-sm text-slate-500">{expenses.length} items</span>
            </div>

            {error && <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}

            {loading ? (
              <p className="mt-6 text-sm text-slate-500">Loading expenses...</p>
            ) : expenses.length === 0 ? (
              <p className="mt-6 text-sm text-slate-500">No expenses yet. Add your first one.</p>
            ) : (
              <div className="mt-4 space-y-3">
                {expenses.map((expense) => (
                  <div key={expense._id} className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3">
                    <div>
                      <p className="font-semibold">{expense.description}</p>
                      <p className="text-sm text-slate-500">{expense.category} • {expense.date?.slice(0, 10)}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="font-semibold text-slate-800">₹{Number(expense.amount).toFixed(2)}</p>
                      <button
                        onClick={() => deleteExpense(expense._id)}
                        className="rounded-lg bg-red-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;