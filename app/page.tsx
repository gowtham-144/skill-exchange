export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-gray-900">
        Welcome to <span className="text-blue-600">Skill Exchange</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Share your skills. Learn from others. Grow together 🚀
      </p>

      <div className="mt-8 flex justify-center space-x-4">
        <a
          href="/skills"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Explore Skills
        </a>
        <a
          href="/add-skill"
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          Add a Skill
        </a>
      </div>
    </div>
  );
}
