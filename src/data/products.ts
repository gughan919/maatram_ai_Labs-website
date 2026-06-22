export type Product = {
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
};

const screenshot = (title: string, accent: string, panels: string[]) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="960" height="620" viewBox="0 0 960 620">
      <rect width="960" height="620" fill="#080808"/>
      <rect x="48" y="48" width="864" height="524" rx="28" fill="#111111" stroke="${accent}" stroke-opacity="0.55"/>
      <rect x="88" y="92" width="240" height="32" rx="16" fill="${accent}" fill-opacity="0.9"/>
      <text x="108" y="115" fill="#080808" font-family="Inter, Arial" font-size="17" font-weight="700">${title}</text>
      <rect x="88" y="158" width="784" height="70" rx="16" fill="#1b1b1b"/>
      <rect x="118" y="183" width="280" height="18" rx="9" fill="#f5d76e" fill-opacity="0.75"/>
      <rect x="440" y="183" width="160" height="18" rx="9" fill="#ffffff" fill-opacity="0.18"/>
      <rect x="632" y="183" width="190" height="18" rx="9" fill="#ffffff" fill-opacity="0.13"/>
      ${panels.map((panel, index) => {
        const x = 88 + index * 264;
        return `
          <rect x="${x}" y="270" width="232" height="210" rx="20" fill="#171717" stroke="#d4af37" stroke-opacity="0.22"/>
          <rect x="${x + 24}" y="302" width="82" height="82" rx="18" fill="${accent}" fill-opacity="0.18"/>
          <rect x="${x + 24}" y="408" width="154" height="16" rx="8" fill="#ffffff" fill-opacity="0.24"/>
          <rect x="${x + 24}" y="438" width="118" height="14" rx="7" fill="#ffffff" fill-opacity="0.12"/>
          <text x="${x + 24}" y="533" fill="#d4af37" font-family="Inter, Arial" font-size="18" font-weight="700">${panel}</text>
        `;
      }).join('')}
    </svg>
  `)}`;

export const productCatalog: Product[] = [
  {
    name: 'Civil Project Management System',
    category: 'Construction product',
    description:
      'A complete management platform for construction and civil engineering teams handling multiple sites, tasks, records, and updates at the same time.',
    image: screenshot('Construction Suite', '#d4af37', ['Live sites', 'Tasks', 'Reports']),
    features: ['Live site updates', 'Task and status tracking', 'Role-based team access', 'Centralized site records'],
  },
  {
    name: 'Invoice Billing System',
    category: 'Billing System product',
    description:
      'A streamlined billing product for creating invoices faster, managing customer and product records, reducing manual errors, and keeping daily transactions organized.',
    image: screenshot('Billing System', '#f5d76e', ['Invoices', 'Customers', 'Stock']),
    features: ['Fast invoice generation', 'Customer and item records', 'Transaction history', 'Billing reports'],
  },
];
