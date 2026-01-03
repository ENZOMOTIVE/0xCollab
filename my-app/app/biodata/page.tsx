"use client"



export default function Biodata() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-rose-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Decorative top element */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-rose-300"></div>

            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-rose-300"></div>
          </div>
        </div>

        {/* Main card with elegant styling */}
        <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl p-8 md:p-12 border border-rose-100">
          {/* Header with decorative elements */}
          <div className="text-center mb-10">
            <p className="text-rose-400 text-sm font-medium tracking-widest uppercase mb-3">Marriage Biodata</p>
            <h1 className="text-4xl md:text-5xl font-serif text-rose-900 mb-2 text-pretty">Sri Ram Krushna Padhy</h1>
            <div className="w-16 h-1 bg-gradient-to-r from-rose-300 via-rose-400 to-rose-300 mx-auto rounded-full"></div>
          </div>

          {/* Personal Details Section */}
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-serif text-rose-800 flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-500">
                ✨
              </span>
              Personal Details
            </h2>
            <div className="space-y-3 text-lg text-gray-700">
              <p className="flex justify-between py-2 border-b border-rose-100">
                <strong className="text-rose-700">Date of Birth:</strong>
                <span className="text-gray-600">—</span>
              </p>
              <p className="flex justify-between py-2 border-b border-rose-100">
                <strong className="text-rose-700">Height:</strong>
                <span className="text-gray-600">—</span>
              </p>
              <p className="flex justify-between py-2 border-b border-rose-100">
                <strong className="text-rose-700">Complexion:</strong>
                <span className="text-gray-600">—</span>
              </p>
              <p className="flex justify-between py-2 border-b border-rose-100">
                <strong className="text-rose-700">Education:</strong>
                <span className="text-gray-600">—</span>
              </p>
              <p className="flex justify-between py-2 border-b border-rose-100">
                <strong className="text-rose-700">Profession:</strong>
                <span className="text-gray-600">—</span>
              </p>
              <p className="flex justify-between py-2">
                <strong className="text-rose-700">Annual Income:</strong>
                <span className="text-gray-600">—</span>
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-rose-200"></div>

            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-rose-200"></div>
          </div>

          {/* Family Details Section */}
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-serif text-rose-800 flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-500">
                💕
              </span>
              Family Details
            </h2>
            <div className="space-y-3 text-lg text-gray-700">
              <p className="flex justify-between py-2 border-b border-rose-100">
                <strong className="text-rose-700">Father's Name:</strong>
                <span className="text-gray-600">—</span>
              </p>
              <p className="flex justify-between py-2 border-b border-rose-100">
                <strong className="text-rose-700">Mother's Name:</strong>
                <span className="text-gray-600">—</span>
              </p>
              <p className="flex justify-between py-2 border-b border-rose-100">
                <strong className="text-rose-700">Father's Profession:</strong>
                <span className="text-gray-600">—</span>
              </p>
              <p className="flex justify-between py-2 border-b border-rose-100">
                <strong className="text-rose-700">Mother's Profession:</strong>
                <span className="text-gray-600">—</span>
              </p>
              <p className="flex justify-between py-2">
                <strong className="text-rose-700">Siblings:</strong>
                <span className="text-gray-600">—</span>
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-rose-200"></div>

            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-rose-200"></div>
          </div>

          {/* Contact Details Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-serif text-rose-800 flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-500">
                📍
              </span>
              Contact Details
            </h2>
            <div className="space-y-3 text-lg text-gray-700">
              <p className="flex justify-between py-2 border-b border-rose-100">
                <strong className="text-rose-700">Address:</strong>
                <span className="text-gray-600">—</span>
              </p>
              <p className="flex justify-between py-2 border-b border-rose-100">
                <strong className="text-rose-700">Phone:</strong>
                <span className="text-gray-600">—</span>
              </p>
              <p className="flex justify-between py-2">
                <strong className="text-rose-700">Email:</strong>
                <span className="text-gray-600">—</span>
              </p>
            </div>
          </div>
        </div>

        {/* Decorative bottom element */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-rose-300"></div>

            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-rose-300"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
