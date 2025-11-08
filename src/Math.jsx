import { useState, useEffect } from "react";
import { Clock, CheckCircle, XCircle, Trophy } from "lucide-react";

export default function MathQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  // Tất cả phép tính trong bảng trừ qua 10
  const allQuestionsWithAddition = [
    // Phép Trừ Qua 10 (Giữ nguyên)
    // Cột 0: 10 - x
    { num1: 10, num2: 1, ans: 9, type: "subtraction" },
    { num1: 10, num2: 2, ans: 8, type: "subtraction" },
    { num1: 10, num2: 3, ans: 7, type: "subtraction" },
    { num1: 10, num2: 4, ans: 6, type: "subtraction" },
    { num1: 10, num2: 5, ans: 5, type: "subtraction" },
    { num1: 10, num2: 6, ans: 4, type: "subtraction" },
    { num1: 10, num2: 7, ans: 3, type: "subtraction" },
    { num1: 10, num2: 8, ans: 2, type: "subtraction" },
    { num1: 10, num2: 9, ans: 1, type: "subtraction" },
    // Cột 1: 11 - x
    { num1: 11, num2: 2, ans: 9, type: "subtraction" },
    { num1: 11, num2: 3, ans: 8, type: "subtraction" },
    { num1: 11, num2: 4, ans: 7, type: "subtraction" },
    { num1: 11, num2: 5, ans: 6, type: "subtraction" },
    { num1: 11, num2: 6, ans: 5, type: "subtraction" },
    { num1: 11, num2: 7, ans: 4, type: "subtraction" },
    { num1: 11, num2: 8, ans: 3, type: "subtraction" },
    { num1: 11, num2: 9, ans: 2, type: "subtraction" },
    // Cột 2: 12 - x
    { num1: 12, num2: 3, ans: 9, type: "subtraction" },
    { num1: 12, num2: 4, ans: 8, type: "subtraction" },
    { num1: 12, num2: 5, ans: 7, type: "subtraction" },
    { num1: 12, num2: 6, ans: 6, type: "subtraction" },
    { num1: 12, num2: 7, ans: 5, type: "subtraction" },
    { num1: 12, num2: 8, ans: 4, type: "subtraction" },
    { num1: 12, num2: 9, ans: 3, type: "subtraction" },
    // Cột 3: 13 - x
    { num1: 13, num2: 4, ans: 9, type: "subtraction" },
    { num1: 13, num2: 5, ans: 8, type: "subtraction" },
    { num1: 13, num2: 6, ans: 7, type: "subtraction" },
    { num1: 13, num2: 7, ans: 6, type: "subtraction" },
    { num1: 13, num2: 8, ans: 5, type: "subtraction" },
    { num1: 13, num2: 9, ans: 4, type: "subtraction" },
    // Cột 4: 14 - x
    { num1: 14, num2: 5, ans: 9, type: "subtraction" },
    { num1: 14, num2: 6, ans: 8, type: "subtraction" },
    { num1: 14, num2: 7, ans: 7, type: "subtraction" },
    { num1: 14, num2: 8, ans: 6, type: "subtraction" },
    { num1: 14, num2: 9, ans: 5, type: "subtraction" },
    // Cột 5: 15 - x
    { num1: 15, num2: 6, ans: 9, type: "subtraction" },
    { num1: 15, num2: 7, ans: 8, type: "subtraction" },
    { num1: 15, num2: 8, ans: 7, type: "subtraction" },
    { num1: 15, num2: 9, ans: 6, type: "subtraction" },
    // Cột 6: 16 - x
    { num1: 16, num2: 7, ans: 9, type: "subtraction" },
    { num1: 16, num2: 8, ans: 8, type: "subtraction" },
    { num1: 16, num2: 9, ans: 7, type: "subtraction" },
    // Cột 7: 17 - x
    { num1: 17, num2: 8, ans: 9, type: "subtraction" },
    { num1: 17, num2: 9, ans: 8, type: "subtraction" },
    // Cột 8: 18 - x
    { num1: 18, num2: 9, ans: 9, type: "subtraction" },

    // Phép Cộng Qua 10 (Thêm vào từ hình ảnh)
    // Tổng bằng 11
    { num1: 9, num2: 2, ans: 11, type: "addition" },
    { num1: 8, num2: 3, ans: 11, type: "addition" },
    { num1: 7, num2: 4, ans: 11, type: "addition" },
    { num1: 6, num2: 5, ans: 11, type: "addition" },
    { num1: 5, num2: 6, ans: 11, type: "addition" },
    { num1: 4, num2: 7, ans: 11, type: "addition" },
    { num1: 3, num2: 8, ans: 11, type: "addition" },
    { num1: 2, num2: 9, ans: 11, type: "addition" },

    // Tổng bằng 12
    { num1: 9, num2: 3, ans: 12, type: "addition" },
    { num1: 8, num2: 4, ans: 12, type: "addition" },
    { num1: 7, num2: 5, ans: 12, type: "addition" },
    { num1: 6, num2: 6, ans: 12, type: "addition" },
    { num1: 5, num2: 7, ans: 12, type: "addition" },
    { num1: 4, num2: 8, ans: 12, type: "addition" },
    { num1: 3, num2: 9, ans: 12, type: "addition" },

    // Tổng bằng 13
    { num1: 9, num2: 4, ans: 13, type: "addition" },
    { num1: 8, num2: 5, ans: 13, type: "addition" },
    { num1: 7, num2: 6, ans: 13, type: "addition" },
    { num1: 6, num2: 7, ans: 13, type: "addition" },
    { num1: 5, num2: 8, ans: 13, type: "addition" },
    { num1: 4, num2: 9, ans: 13, type: "addition" },

    // Tổng bằng 14
    { num1: 9, num2: 5, ans: 14, type: "addition" },
    { num1: 8, num2: 6, ans: 14, type: "addition" },
    { num1: 7, num2: 7, ans: 14, type: "addition" },
    { num1: 6, num2: 8, ans: 14, type: "addition" },
    { num1: 5, num2: 9, ans: 14, type: "addition" },

    // Tổng bằng 15
    { num1: 9, num2: 6, ans: 15, type: "addition" },
    { num1: 8, num2: 7, ans: 15, type: "addition" },
    { num1: 7, num2: 8, ans: 15, type: "addition" },
    { num1: 6, num2: 9, ans: 15, type: "addition" },

    // Tổng bằng 16
    { num1: 9, num2: 7, ans: 16, type: "addition" },
    { num1: 8, num2: 8, ans: 16, type: "addition" },
    { num1: 7, num2: 9, ans: 16, type: "addition" },

    // Tổng bằng 17
    { num1: 9, num2: 8, ans: 17, type: "addition" },
    { num1: 8, num2: 9, ans: 17, type: "addition" },

    // Tổng bằng 18
    { num1: 9, num2: 9, ans: 18, type: "addition" },
  ];

  // Tạo câu hỏi ngẫu nhiên từ bảng
  const generateQuestion = () => {
    const question =
      allQuestions[Math.floor(Math.random() * allQuestions.length)];

    return {
      num1: question.num1,
      num2: question.num2,
      correctAnswer: question.ans,
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  };

  // Bắt đầu game
  const startGame = () => {
    setGameStarted(true);
    setCurrentQuestion(generateQuestion());
    setTimeLeft(15);
    setTotalQuestions(0);
    setCorrectAnswers(0);
    setShowResult(false);
  };

  // Đếm ngược thời gian
  useEffect(() => {
    if (!gameStarted || showResult || !currentQuestion) return;

    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Hết giờ
      handleAnswer(null);
    }
  }, [timeLeft, gameStarted, showResult, currentQuestion]);

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
      setTimeLeft(15);
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
              Phép Trừ Qua 10
            </h2>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-6 mb-6">
            <p className="text-lg text-gray-700 mb-2">
              📝 Mỗi câu hỏi có 9 giây
            </p>
            <p className="text-lg text-gray-700 mb-2">🎯 Chọn đáp án đúng</p>
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
        {currentQuestion && (
          <>
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 mb-6 text-center">
              <div className="text-6xl font-bold text-purple-700 mb-2">
                {currentQuestion.num1} - {currentQuestion.num2} = ?
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
                  className={`text-3xl font-bold py-6 rounded-2xl transition-all transform hover:scale-105 ${
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

        {/* Điểm */}
        {totalQuestions > 0 && (
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
