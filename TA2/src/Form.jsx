import React from 'react';

function Form() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-10">
      <form className="bg-blue-200 p-20 rounded-lg shadow-lg w-full max-w-5xl space-y-12">
        {/* Melanjutkan Ke */}
        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-bold w-1/4" htmlFor="melanjutkan">
            Melanjutkan Ke
          </label>
          <input
            className="w-3/4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="melanjutkan"
            placeholder="....."
          />
        </div>

        {/* Bekerja */}
        <div>
          <label className="text-gray-700 font-bold w-1/4 block mb-4">
            Bekerja
          </label>

          {/* a. Nama Perusahaan */}
          <div className="flex items-center justify-between mb-4">
            <label className="text-gray-700 font-bold w-1/4" htmlFor="perusahaan">
              a. Nama Perusahaan
            </label>
            <input
              className="w-3/4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="perusahaan"
              placeholder="....."
            />
          </div>

          {/* b. Tanggal Mulai Bekerja */}
          <div className="flex items-center justify-between mb-4">
            <label className="text-gray-700 font-bold w-1/4" htmlFor="tanggalMulai">
              b. Tanggal Mulai Bekerja
            </label>
            <input
              className="w-3/4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="tanggalMulai"
              placeholder="....."
            />
          </div>

          {/* c. Penghasilan */}
          <div className="flex items-center justify-between mb-4">
            <label className="text-gray-700 font-bold w-1/4" htmlFor="penghasilan">
              c. Penghasilan
            </label>
            <input
              className="w-3/4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="penghasilan"
              placeholder="....."
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Kembali
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Lanjut
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
