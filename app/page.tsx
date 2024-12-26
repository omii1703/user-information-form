// app/page.tsx

import MyForm from '../components/form';
 // Use the correct relative path

// Metadata API for title and meta tags
export const metadata = {
  title: 'Form Example',
  description: 'A form example using Next.js and ShadCN.',
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <MyForm />
    </main>
  );
}
