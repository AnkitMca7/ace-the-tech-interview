// PracticeQuestions.jsx
import React, { useEffect, useState } from "react";

export const PracticeQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch popular LeetCode questions (using a static list for example)
    const popularQuestions = [
      {
        id: 1,
        title: "Two Sum",
        url: "https://leetcode.com/problems/two-sum/",
      },
      {
        id: 2,
        title: "Add Two Numbers",
        url: "https://leetcode.com/problems/add-two-numbers/",
      },
      {
        id: 3,
        title: "Reverse Integer",
        url: "https://leetcode.com/problems/reverse-integer/",
      },
      
      // Add more questions as needed
    ];
    setQuestions(popularQuestions);
  }, []);

  return (
    <div className="mt-10 mb-10 w-11/12 m-auto">
      <h1 className="font-bold text-2xl mb-4">Popular LeetCode Questions</h1>
      <table className="min-w-full leading-normal border">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 bg-gray-100 text-left text-sm font-semibold">
              ID
            </th>
            <th className="px-5 py-3 border-b-2 bg-gray-100 text-left text-sm font-semibold">
              Title
            </th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td className="px-5 py-5 border-b text-sm">{question.id}</td>
              <td className="px-5 py-5 border-b text-sm">
                <a
                  href={question.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {question.title}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};