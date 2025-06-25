import React, { useState } from "react";

export const LoginPage: React.FC = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 h-16">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg text-gray-800">BOX4BABY</span>
        </div>
        <button className="bg-gray-100 rounded-lg p-1">
          <span className="sr-only">Закрыть</span>
          <svg width="24" height="24" fill="none" stroke="#30313D" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6"/></svg>
        </button>
      </div>
      {/* Content */}
      <div className="flex flex-col flex-1 px-4 py-8 gap-4">
        <div className="text-center">
          <h1 className="font-medium text-2xl text-gray-900 mb-2">Войдите или зарегистрируйтесь</h1>
          <p className="text-gray-500 text-base">Введите номер телефона и мы отправим код подтверждения</p>
        </div>
        <input
          className="w-full rounded-xl border-2 border-indigo-400 bg-gray-50 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="+998"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <button
          className="w-full rounded-2xl py-4 mt-2 text-white text-lg font-medium bg-indigo-400 disabled:bg-gray-200 disabled:text-gray-400 transition"
          disabled={phone.length < 7}
        >
          Получить код
        </button>
        <p className="text-xs text-gray-500 text-center mt-4">
          Нажимая кнопку «Получить код», вы принимаете условия Политики конфиденциальности и Пользовательского соглашения.
        </p>
      </div>
    </div>
  );
}; 