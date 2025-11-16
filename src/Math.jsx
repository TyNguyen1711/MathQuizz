// import { useState, useEffect } from "react";
// import { Clock, CheckCircle, XCircle, Trophy } from "lucide-react";

// export default function MathQuiz() {
//   const [currentQuestion, setCurrentQuestion] = useState(null);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [timeLeft, setTimeLeft] = useState(10);
//   const [totalQuestions, setTotalQuestions] = useState(0);
//   const [correctAnswers, setCorrectAnswers] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [gameStarted, setGameStarted] = useState(false);
//   const [shuffledQuestions, setShuffledQuestions] = useState([]);

//   // Tất cả phép tính: Cộng qua 10 và Trừ qua 10
//   const allQuestions = [
//     // PHÉP CỘNG QUA 10
//     // 9 + x
//     { num1: 9, num2: 2, ans: 11, operator: "+" },
//     { num1: 9, num2: 3, ans: 12, operator: "+" },
//     { num1: 9, num2: 4, ans: 13, operator: "+" },
//     { num1: 9, num2: 5, ans: 14, operator: "+" },
//     { num1: 9, num2: 6, ans: 15, operator: "+" },
//     { num1: 9, num2: 7, ans: 16, operator: "+" },
//     { num1: 9, num2: 8, ans: 17, operator: "+" },
//     { num1: 9, num2: 9, ans: 18, operator: "+" },
//     // 8 + x
//     { num1: 8, num2: 3, ans: 11, operator: "+" },
//     { num1: 8, num2: 4, ans: 12, operator: "+" },
//     { num1: 8, num2: 5, ans: 13, operator: "+" },
//     { num1: 8, num2: 6, ans: 14, operator: "+" },
//     { num1: 8, num2: 7, ans: 15, operator: "+" },
//     { num1: 8, num2: 8, ans: 16, operator: "+" },
//     { num1: 8, num2: 9, ans: 17, operator: "+" },
//     // 7 + x
//     { num1: 7, num2: 4, ans: 11, operator: "+" },
//     { num1: 7, num2: 5, ans: 12, operator: "+" },
//     { num1: 7, num2: 6, ans: 13, operator: "+" },
//     { num1: 7, num2: 7, ans: 14, operator: "+" },
//     { num1: 7, num2: 8, ans: 15, operator: "+" },
//     { num1: 7, num2: 9, ans: 16, operator: "+" },
//     // 6 + x
//     { num1: 6, num2: 5, ans: 11, operator: "+" },
//     { num1: 6, num2: 6, ans: 12, operator: "+" },
//     { num1: 6, num2: 7, ans: 13, operator: "+" },
//     { num1: 6, num2: 8, ans: 14, operator: "+" },
//     { num1: 6, num2: 9, ans: 15, operator: "+" },
//     // 5 + x
//     { num1: 5, num2: 6, ans: 11, operator: "+" },
//     { num1: 5, num2: 7, ans: 12, operator: "+" },
//     { num1: 5, num2: 8, ans: 13, operator: "+" },
//     { num1: 5, num2: 9, ans: 14, operator: "+" },
//     // 4 + x
//     { num1: 4, num2: 7, ans: 11, operator: "+" },
//     { num1: 4, num2: 8, ans: 12, operator: "+" },
//     { num1: 4, num2: 9, ans: 13, operator: "+" },
//     // 3 + x
//     { num1: 3, num2: 8, ans: 11, operator: "+" },
//     { num1: 3, num2: 9, ans: 12, operator: "+" },
//     // 2 + x
//     { num1: 2, num2: 9, ans: 11, operator: "+" },

//     // PHÉP TRỪ QUA 10
//     // 10 - x
//     { num1: 10, num2: 1, ans: 9, operator: "-" },
//     { num1: 10, num2: 2, ans: 8, operator: "-" },
//     { num1: 10, num2: 3, ans: 7, operator: "-" },
//     { num1: 10, num2: 4, ans: 6, operator: "-" },
//     { num1: 10, num2: 5, ans: 5, operator: "-" },
//     { num1: 10, num2: 6, ans: 4, operator: "-" },
//     { num1: 10, num2: 7, ans: 3, operator: "-" },
//     { num1: 10, num2: 8, ans: 2, operator: "-" },
//     { num1: 10, num2: 9, ans: 1, operator: "-" },
//     // 11 - x
//     { num1: 11, num2: 2, ans: 9, operator: "-" },
//     { num1: 11, num2: 3, ans: 8, operator: "-" },
//     { num1: 11, num2: 4, ans: 7, operator: "-" },
//     { num1: 11, num2: 5, ans: 6, operator: "-" },
//     { num1: 11, num2: 6, ans: 5, operator: "-" },
//     { num1: 11, num2: 7, ans: 4, operator: "-" },
//     { num1: 11, num2: 8, ans: 3, operator: "-" },
//     { num1: 11, num2: 9, ans: 2, operator: "-" },
//     // 12 - x
//     { num1: 12, num2: 3, ans: 9, operator: "-" },
//     { num1: 12, num2: 4, ans: 8, operator: "-" },
//     { num1: 12, num2: 5, ans: 7, operator: "-" },
//     { num1: 12, num2: 6, ans: 6, operator: "-" },
//     { num1: 12, num2: 7, ans: 5, operator: "-" },
//     { num1: 12, num2: 8, ans: 4, operator: "-" },
//     { num1: 12, num2: 9, ans: 3, operator: "-" },
//     // 13 - x
//     { num1: 13, num2: 4, ans: 9, operator: "-" },
//     { num1: 13, num2: 5, ans: 8, operator: "-" },
//     { num1: 13, num2: 6, ans: 7, operator: "-" },
//     { num1: 13, num2: 7, ans: 6, operator: "-" },
//     { num1: 13, num2: 8, ans: 5, operator: "-" },
//     { num1: 13, num2: 9, ans: 4, operator: "-" },
//     // 14 - x
//     { num1: 14, num2: 5, ans: 9, operator: "-" },
//     { num1: 14, num2: 6, ans: 8, operator: "-" },
//     { num1: 14, num2: 7, ans: 7, operator: "-" },
//     { num1: 14, num2: 8, ans: 6, operator: "-" },
//     { num1: 14, num2: 9, ans: 5, operator: "-" },
//     // 15 - x
//     { num1: 15, num2: 6, ans: 9, operator: "-" },
//     { num1: 15, num2: 7, ans: 8, operator: "-" },
//     { num1: 15, num2: 8, ans: 7, operator: "-" },
//     { num1: 15, num2: 9, ans: 6, operator: "-" },
//     // 16 - x
//     { num1: 16, num2: 7, ans: 9, operator: "-" },
//     { num1: 16, num2: 8, ans: 8, operator: "-" },
//     { num1: 16, num2: 9, ans: 7, operator: "-" },
//     // 17 - x
//     { num1: 17, num2: 8, ans: 9, operator: "-" },
//     { num1: 17, num2: 9, ans: 8, operator: "-" },
//     // 18 - x
//     { num1: 18, num2: 9, ans: 9, operator: "-" },
//   ];

//   // Hàm xáo trộn mảng (Fisher-Yates shuffle)
//   const shuffleArray = (array) => {
//     const shuffled = [...array];
//     for (let i = shuffled.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//     }
//     return shuffled;
//   };

//   // Tạo câu hỏi ngẫu nhiên từ bảng
//   const generateQuestion = () => {
//     const question =
//       shuffledQuestions.length > 0
//         ? shuffledQuestions[
//             Math.floor(Math.random() * shuffledQuestions.length)
//           ]
//         : allQuestions[Math.floor(Math.random() * allQuestions.length)];

//     // Tạo danh sách đáp án dựa vào loại phép tính
//     let options;
//     if (question.operator === "+") {
//       // Phép cộng: đáp án từ 11-18
//       options = [11, 12, 13, 14, 15, 16, 17, 18];
//     } else {
//       // Phép trừ: đáp án từ 1-9
//       options = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     }

//     return {
//       num1: question.num1,
//       num2: question.num2,
//       operator: question.operator,
//       correctAnswer: question.ans,
//       options: options,
//     };
//   };

//   // Bắt đầu game
//   const startGame = () => {
//     setGameStarted(true);
//     const shuffled = shuffleArray(allQuestions);
//     setShuffledQuestions(shuffled);
//     setCurrentQuestion(generateQuestion());
//     setTimeLeft(10);
//     setTotalQuestions(0);
//     setCorrectAnswers(0);
//     setShowResult(false);
//   };

//   // Đếm ngược thời gian
//   useEffect(() => {
//     if (!gameStarted || showResult || !currentQuestion) return;

//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       // Hết giờ
//       handleAnswer(null);
//     }
//   }, [timeLeft, gameStarted, showResult, currentQuestion]);

//   // Xử lý khi chọn đáp án
//   const handleAnswer = (answer) => {
//     setSelectedAnswer(answer);
//     const correct = answer === currentQuestion.correctAnswer;
//     setIsCorrect(correct);
//     setShowResult(true);
//     setTotalQuestions(totalQuestions + 1);
//     if (correct) {
//       setCorrectAnswers(correctAnswers + 1);
//     }

//     // Chuyển sang câu tiếp theo sau 1.5 giây
//     setTimeout(() => {
//       setCurrentQuestion(generateQuestion());
//       setSelectedAnswer(null);
//       setTimeLeft(10);
//       setShowResult(false);
//     }, 1500);
//   };

//   if (!gameStarted) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center p-4">
//         <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
//           <div className="mb-6">
//             <div className="text-6xl mb-4">🦉</div>
//             <h1 className="text-4xl font-bold text-pink-600 mb-2">Luyện Tập</h1>
//             <h2 className="text-3xl font-bold text-purple-600">
//               Cộng Trừ Qua 10
//             </h2>
//           </div>
//           <div className="bg-yellow-50 rounded-2xl p-6 mb-6">
//             <p className="text-lg text-gray-700 mb-2">
//               📝 Mỗi câu hỏi có 10 giây
//             </p>
//             <p className="text-lg text-gray-700 mb-2">🎯 Chọn đáp án đúng</p>
//             <p className="text-lg text-gray-700">
//               ⭐ Luyện tập nhiều để giỏi hơn!
//             </p>
//           </div>
//           <button
//             onClick={startGame}
//             className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-2xl font-bold py-4 px-12 rounded-full hover:shadow-lg transform hover:scale-105 transition-all"
//           >
//             Bắt Đầu 🚀
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center p-4">
//       <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-md w-full">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <div className="bg-blue-100 rounded-2xl px-4 py-2">
//             <p className="text-sm text-gray-600">Tổng câu</p>
//             <p className="text-2xl font-bold text-blue-600">{totalQuestions}</p>
//           </div>
//           <div className="bg-green-100 rounded-2xl px-4 py-2">
//             <p className="text-sm text-gray-600">Đúng</p>
//             <p className="text-2xl font-bold text-green-600">
//               {correctAnswers}
//             </p>
//           </div>
//           <div
//             className={`rounded-2xl px-4 py-2 ${
//               timeLeft <= 3 ? "bg-red-100" : "bg-orange-100"
//             }`}
//           >
//             <Clock
//               className={`inline mr-1 ${
//                 timeLeft <= 3 ? "text-red-600" : "text-orange-600"
//               }`}
//               size={20}
//             />
//             <span
//               className={`text-2xl font-bold ${
//                 timeLeft <= 3 ? "text-red-600" : "text-orange-600"
//               }`}
//             >
//               {timeLeft}s
//             </span>
//           </div>
//         </div>

//         {/* Câu hỏi */}
//         {currentQuestion && (
//           <>
//             <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 mb-6 text-center">
//               <div className="text-6xl font-bold text-purple-700 mb-2">
//                 {currentQuestion.num1} {currentQuestion.operator}{" "}
//                 {currentQuestion.num2} = ?
//               </div>
//             </div>

//             {/* Kết quả */}
//             {showResult && (
//               <div
//                 className={`mb-4 p-4 rounded-2xl text-center ${
//                   isCorrect ? "bg-green-100" : "bg-red-100"
//                 }`}
//               >
//                 {isCorrect ? (
//                   <div className="flex items-center justify-center gap-2">
//                     <CheckCircle className="text-green-600" size={32} />
//                     <span className="text-2xl font-bold text-green-600">
//                       Đúng rồi! 🎉
//                     </span>
//                   </div>
//                 ) : (
//                   <div>
//                     <div className="flex items-center justify-center gap-2 mb-2">
//                       <XCircle className="text-red-600" size={32} />
//                       <span className="text-2xl font-bold text-red-600">
//                         Chưa đúng!
//                       </span>
//                     </div>
//                     <p className="text-lg text-red-700">
//                       Đáp án đúng:{" "}
//                       <span className="font-bold">
//                         {currentQuestion.correctAnswer}
//                       </span>
//                     </p>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Đáp án */}
//             <div className="grid grid-cols-4 gap-3">
//               {currentQuestion.options.map((option, index) => (
//                 <button
//                   key={index}
//                   onClick={() => !showResult && handleAnswer(option)}
//                   disabled={showResult}
//                   className={`text-2xl font-bold py-4 rounded-2xl transition-all transform hover:scale-105 ${
//                     showResult && option === currentQuestion.correctAnswer
//                       ? "bg-green-500 text-white"
//                       : showResult && option === selectedAnswer
//                       ? "bg-red-500 text-white"
//                       : "bg-gradient-to-br from-yellow-300 to-orange-300 text-gray-800 hover:shadow-lg"
//                   } ${showResult ? "cursor-not-allowed" : "cursor-pointer"}`}
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//           </>
//         )}

//         {/* Điểm */}
//         {totalQuestions > 0 && (
//           <div className="mt-6 text-center">
//             <div className="inline-block bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-2xl px-6 py-3">
//               <Trophy className="inline mr-2 text-yellow-700" size={24} />
//               <span className="text-xl font-bold text-yellow-800">
//                 Tỷ lệ đúng:{" "}
//                 {totalQuestions > 0
//                   ? Math.round((correctAnswers / totalQuestions) * 100)
//                   : 0}
//                 %
//               </span>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { Clock, CheckCircle, XCircle, Trophy, Pause, Play } from "lucide-react";

// ===== CẤU HÌNH THỜI GIAN =====
const THINKING_TIME = 35; // Thời gian suy nghĩ cho mỗi câu (giây)

export default function MathQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(THINKING_TIME);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Tạo phép tính cộng/trừ ngẫu nhiên trong khoảng 0-99
  // Tạo phép tính cộng/trừ ngẫu nhiên
  const generateQuestion = () => {
    const operator = Math.random() > 0.5 ? "+" : "-";
    let num1, num2, correctAnswer;

    if (operator === "+") {
      // Phép cộng: số hạng từ 0-99, kết quả < 200
      num1 = Math.floor(Math.random() * 100); // 0-99
      num2 = Math.floor(Math.random() * 100); // 0-99
      correctAnswer = num1 + num2;
    } else {
      // Phép trừ: đảm bảo kết quả >= 0 (phù hợp lớp 2)
      num1 = Math.floor(Math.random() * 100); // 0-99
      num2 = Math.floor(Math.random() * (num1 + 1)); // 0 đến num1 để kết quả >= 0
      correctAnswer = num1 - num2;
    }

    // Tạo 5 đáp án sai dễ nhầm (chênh lệch 1, 10, hoặc nhầm hàng chục/đơn vị)
    const wrongAnswers = new Set();
    const strategies = [
      () => correctAnswer + 1, // Sai 1 đơn vị
      () => correctAnswer - 1, // Sai 1 đơn vị
      () => correctAnswer + 10, // Sai 1 chục
      () => correctAnswer - 10, // Sai 1 chục
      () => correctAnswer + 11, // Nhầm cả chục và đơn vị
      () => correctAnswer - 11, // Nhầm cả chục và đơn vị
      () => correctAnswer + 9, // Sai 9 đơn vị
      () => correctAnswer - 9, // Sai 9 đơn vị
    ];

    let attempts = 0;
    while (wrongAnswers.size < 5 && attempts < 100) {
      const strategy =
        strategies[Math.floor(Math.random() * strategies.length)];
      const wrong = strategy();

      // Chỉ chấp nhận đáp án >= 0 và < 300 (phù hợp lớp 2)
      if (wrong !== correctAnswer && wrong >= 0 && wrong < 300) {
        wrongAnswers.add(wrong);
      }
      attempts++;
    }

    // Nếu chưa đủ 5 đáp án sai, thêm ngẫu nhiên
    while (wrongAnswers.size < 5) {
      const wrong = correctAnswer + Math.floor(Math.random() * 21) - 10;
      if (wrong !== correctAnswer && wrong >= 0) {
        wrongAnswers.add(wrong);
      }
    }

    // Trộn đáp án đúng vào các đáp án sai
    const options = [correctAnswer, ...Array.from(wrongAnswers)];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }

    return {
      num1,
      num2,
      operator,
      correctAnswer,
      options,
    };
  };
  // Bắt đầu game
  const startGame = () => {
    setGameStarted(true);
    setIsPaused(false);
    setCurrentQuestion(generateQuestion());
    setTimeLeft(THINKING_TIME);
    setTotalQuestions(0);
    setCorrectAnswers(0);
    setShowResult(false);
  };

  // Tạm dừng/Tiếp tục
  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  // Đếm ngược thời gian
  useEffect(() => {
    if (!gameStarted || showResult || !currentQuestion || isPaused) return;

    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Hết giờ
      handleAnswer(null);
    }
  }, [timeLeft, gameStarted, showResult, currentQuestion, isPaused]);

  // Xử lý khi chọn đáp án
  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    const correct = answer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    setTotalQuestions(totalQuestions + 1);
    if (correct) {
      setCorrectAnswers(correctAnswers + 1);
    }

    // Chuyển sang câu tiếp theo sau 1.5 giây
    setTimeout(() => {
      setCurrentQuestion(generateQuestion());
      setSelectedAnswer(null);
      setTimeLeft(THINKING_TIME);
      setShowResult(false);
    }, 1500);
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="mb-6">
            <div className="text-6xl mb-4">🦉</div>
            <h1 className="text-4xl font-bold text-pink-600 mb-2">Luyện Tập</h1>
            <h2 className="text-3xl font-bold text-purple-600">
              Cộng Trừ 0-99
            </h2>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-6 mb-6">
            <p className="text-lg text-gray-700 mb-2">
              📝 Mỗi câu hỏi có {THINKING_TIME} giây
            </p>
            <p className="text-lg text-gray-700 mb-2">
              🎯 Chọn 1 trong 6 đáp án
            </p>
            <p className="text-lg text-gray-700 mb-2">🔢 Phạm vi: 0 đến 99</p>
            <p className="text-lg text-gray-700">
              ⭐ Luyện tập nhiều để giỏi hơn!
            </p>
          </div>
          <button
            onClick={startGame}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-2xl font-bold py-4 px-12 rounded-full hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Bắt Đầu 🚀
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-md w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="bg-blue-100 rounded-2xl px-4 py-2">
            <p className="text-sm text-gray-600">Tổng câu</p>
            <p className="text-2xl font-bold text-blue-600">{totalQuestions}</p>
          </div>
          <div className="bg-green-100 rounded-2xl px-4 py-2">
            <p className="text-sm text-gray-600">Đúng</p>
            <p className="text-2xl font-bold text-green-600">
              {correctAnswers}
            </p>
          </div>
          <button
            onClick={togglePause}
            className="bg-purple-100 hover:bg-purple-200 rounded-2xl px-4 py-2 transition-colors"
          >
            {isPaused ? (
              <Play className="text-purple-600" size={24} />
            ) : (
              <Pause className="text-purple-600" size={24} />
            )}
          </button>
          <div
            className={`rounded-2xl px-4 py-2 ${
              timeLeft <= 3 ? "bg-red-100" : "bg-orange-100"
            }`}
          >
            <Clock
              className={`inline mr-1 ${
                timeLeft <= 3 ? "text-red-600" : "text-orange-600"
              }`}
              size={20}
            />
            <span
              className={`text-2xl font-bold ${
                timeLeft <= 3 ? "text-red-600" : "text-orange-600"
              }`}
            >
              {timeLeft}s
            </span>
          </div>
        </div>

        {/* Câu hỏi */}
        {currentQuestion && !isPaused && (
          <>
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 mb-6 text-center">
              <div className="text-6xl font-bold text-purple-700 mb-2">
                {currentQuestion.num1} {currentQuestion.operator}{" "}
                {currentQuestion.num2} = ?
              </div>
            </div>

            {/* Kết quả */}
            {showResult && (
              <div
                className={`mb-4 p-4 rounded-2xl text-center ${
                  isCorrect ? "bg-green-100" : "bg-red-100"
                }`}
              >
                {isCorrect ? (
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="text-green-600" size={32} />
                    <span className="text-2xl font-bold text-green-600">
                      Đúng rồi! 🎉
                    </span>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <XCircle className="text-red-600" size={32} />
                      <span className="text-2xl font-bold text-red-600">
                        Chưa đúng!
                      </span>
                    </div>
                    <p className="text-lg text-red-700">
                      Đáp án đúng:{" "}
                      <span className="font-bold">
                        {currentQuestion.correctAnswer}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Đáp án */}
            <div className="grid grid-cols-3 gap-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && handleAnswer(option)}
                  disabled={showResult}
                  className={`text-2xl font-bold py-4 rounded-2xl transition-all transform hover:scale-105 ${
                    showResult && option === currentQuestion.correctAnswer
                      ? "bg-green-500 text-white"
                      : showResult && option === selectedAnswer
                      ? "bg-red-500 text-white"
                      : "bg-gradient-to-br from-yellow-300 to-orange-300 text-gray-800 hover:shadow-lg"
                  } ${showResult ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Màn hình tạm dừng */}
        {isPaused && (
          <div className="text-center py-12">
            <Pause className="mx-auto mb-4 text-purple-600" size={64} />
            <h2 className="text-3xl font-bold text-purple-600 mb-4">
              Đã Tạm Dừng
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Nhấn nút Play để tiếp tục
            </p>
            <button
              onClick={togglePause}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold py-3 px-8 rounded-full hover:shadow-lg transform hover:scale-105 transition-all"
            >
              <Play className="inline mr-2" size={24} />
              Tiếp Tục
            </button>
          </div>
        )}

        {/* Điểm */}
        {totalQuestions > 0 && !isPaused && (
          <div className="mt-6 text-center">
            <div className="inline-block bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-2xl px-6 py-3">
              <Trophy className="inline mr-2 text-yellow-700" size={24} />
              <span className="text-xl font-bold text-yellow-800">
                Tỷ lệ đúng:{" "}
                {totalQuestions > 0
                  ? Math.round((correctAnswers / totalQuestions) * 100)
                  : 0}
                %
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
