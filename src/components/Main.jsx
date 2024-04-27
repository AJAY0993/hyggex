import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import Button from "./Button";
import Menu from "./Menu";
import CardText from "./CardText";
import { useState } from "react";
import { MdLightbulbOutline } from "react-icons/md";
import { HiMiniSpeakerWave } from "react-icons/hi2";

const data = [
  {
    question: "9 + 6 + 7x - 2x - 3",
    answer: "12 + 5x",
  },
  {
    question: "What is 2 + 2?",
    answer: "4",
  },
  {
    question: "What is 5 * 4?",
    answer: "20",
  },
  {
    question: "What is 10 - 3?",
    answer: "7",
  },
  {
    question: "What is 8 / 2?",
    answer: "4",
  },
  {
    question: "What is 3 squared?",
    answer: "9",
  },
  {
    question: "What is 7 + 3?",
    answer: "10",
  },
  {
    question: "What is 15 - 6?",
    answer: "9",
  },
  {
    question: "What is 12 / 4?",
    answer: "3",
  },
  {
    question: "What is 20 - 10?",
    answer: "10",
  },
];

function Main() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [current, setCurrent] = useState(0);
  const handleFlip = () => setShowAnswer((s) => !s);

  const next = () => {
    setShowAnswer(false);
    setCurrent((s) => s + 1);
  };
  const prev = () => {
    setShowAnswer(false);
    setCurrent((s) => s - 1);
  };

  return (
    <main>
      <Menu />
      <div className="mx-auto mt-8 w-[44.5rem]">
        <div
          className={`relative flex h-[25.5rem] cursor-pointer items-center justify-center rounded-[42px] ${showAnswer ? "bg-gradient-to-tr from-sky-500 to-sky-900 " : "bg-gradient-to-tr from-blue-500 to-blue-900"}`}
          onClick={handleFlip}
        >
          <MdLightbulbOutline className="absolute left-8 top-8 text-2xl text-neutral-50" />
          <HiMiniSpeakerWave className="absolute right-8 top-8 text-2xl text-neutral-50" />
          {!showAnswer && <CardText text={data[current].question} />}
          {showAnswer && <CardText text={data[current].answer} />}
        </div>
        <div className="mx-auto mt-8 flex w-[612px] items-center justify-between">
          <div>
            <img src="replay.png" />
          </div>
          <div className="flex items-center gap-2">
            <Button type="rounded" disabled={current === 0} onClick={prev}>
              <FaLessThan />
            </Button>
            <p className="text-2xl font-bold text-[#202B37]">
              {current < 10 ? "0" + (current + 1) : current + 1}/10
            </p>
            <Button type="rounded" disabled={current === 9} onClick={next}>
              <FaGreaterThan />
            </Button>
          </div>
          <div>
            <img src="fullScreen.png" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
