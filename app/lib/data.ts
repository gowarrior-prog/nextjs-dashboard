import { invoices, revenue } from './placeholder-data';

// 1. Purana function dashboard overview page ke liye
export async function fetchRevenue() {
  try {
    return revenue;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

// 2. Missing function jis ki wajah se error aa raha hai
export async function fetchLatestInvoices() {
  try {
    return invoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

// 3. Chapter 11 ka naya function invoices search bar ke liye
export async function fetchFilteredInvoices(query: string) {
  try {
    if (!query) return invoices;
    
    return invoices.filter((invoice) => 
      invoice.amount.toString().includes(query) ||
      invoice.status.toLowerCase().includes(query.toLowerCase()) ||
      invoice.date.includes(query)
    );
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch filtered invoices.');
  }
}

export async function fetchCustomers() {
  try {
    const { customers } = await import('./placeholder-data');
    return customers;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch all customers.');
  }
}
