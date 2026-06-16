const customers = [
  {
    id: '39d7af60-326e-4930-9e8e-712ee57d7bef',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '39d7af60-326e-4930-9e8e-712ee57d7bfe',
    name: 'Balaji Srinivasan',
    email: 'balaji@srinivasan.com',
    image_url: '/customers/balaji-srinivasan.png',
  }
];

const invoices = [
  {
    customer_id: '39d7af60-326e-4930-9e8e-712ee57d7bef',
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: '39d7af60-326e-4930-9e8e-712ee57d7bfe',
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  }
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 2800 },
  { month: 'Mar', revenue: 4200 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 4000 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 1900 },
  { month: 'Nov', revenue: 2200 },
  { month: 'Dec', revenue: 4800 },
];

// Yeh line sab se zaroori hai taake data.ts isay use kar sake
export { customers, invoices, revenue };
