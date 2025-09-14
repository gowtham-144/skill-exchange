export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">🌟 Welcome to Skill Link</h1>
      <p className="text-gray-600 mb-8">Connect and share your skills easily.</p>
      <div className="space-x-4">
        <a href="/signup" className="px-6 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600">Signup</a>
        <a href="/login" className="px-6 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600">Login</a>
      </div>
    </main>
  );
}
