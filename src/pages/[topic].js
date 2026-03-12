// pages/[topic].js
import { useRouter } from "next/router";

// 1. Import your lesson components
import IndirectQuestionsPage from "../components/english/indirect-questions/page.jsx";
import WordFormationMistakesPage from "../components/english/word-formation-mistake/page.jsx";
import AdverbsLessonPage from "../components/english/adverbs-lesson/page.jsx";
import PrefixHome from "../components/english/prefix-data/page.jsx";
import VocabularyPage from "../components/english/prefix-vocab/page.jsx";
import RootWordsPage from "../components/english/full-suffix-preffix/page.jsx";

// 2. Create a mapping of "URL slug" -> "Component"
const LESSONS = {
  "indirect-questions": IndirectQuestionsPage,
  "word-formation-mistakes": WordFormationMistakesPage,
  "adverbs-lesson": AdverbsLessonPage,
  "prefix-data": PrefixHome,
  "prefix-vocab": VocabularyPage,

  "full-suffix-preffix": RootWordsPage,
};

export default function DynamicLessonPage() {
  const router = useRouter();
  const { topic } = router.query; // This gets the "topic" from the URL

  // 3. Find the component that matches the URL
  const LessonComponent = LESSONS[topic];

  // 4. Handle loading or 404 states
  if (!topic) return <div>Loading...</div>;
  if (!LessonComponent) return <div>Lesson not found for: {topic}</div>;

  // 5. Render the matching component
  return <LessonComponent />;
}
