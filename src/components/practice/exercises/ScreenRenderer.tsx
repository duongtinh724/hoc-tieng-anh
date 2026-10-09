"use client";

import { CategorizeExercise } from "@/components/practice/exercises/CategorizeExercise";
import { DialogueFillExercise } from "@/components/practice/exercises/DialogueFillExercise";
import { DropdownExercise } from "@/components/practice/exercises/DropdownExercise";
import { DictationExercise } from "@/components/practice/exercises/DictationExercise";
import { MatchExercise } from "@/components/practice/exercises/MatchExercise";
import { QuizExercise } from "@/components/practice/exercises/QuizExercise";
import { ReadingFillExercise } from "@/components/practice/exercises/ReadingFillExercise";
import { ReorderExercise } from "@/components/practice/exercises/ReorderExercise";
import { SelfWritingExercise } from "@/components/practice/exercises/SelfWritingExercise";
import { SentenceDragExercise } from "@/components/practice/exercises/SentenceDragExercise";
import { SELF_WRITING_ANSWER_ID } from "@/lib/practice/self-writing";
import { WordDragProvider } from "@/components/practice/dnd/WordDragProvider";
import {
  getScreenWords,
  isWordDragScreen,
} from "@/lib/practice/get-screen-words";
import type { PracticeScreenConfig, ScreenState } from "@/types/practice";

interface ScreenRendererProps {
  screen: PracticeScreenConfig;
  state: ScreenState;
  selectedWordId: string | null;
  onSelectWord: (wordId: string) => void;
  onAssign: (itemId: string, value: string) => void;
  onClear: (itemId: string) => void;
  onTextChange: (itemId: string, value: string) => void;
  onReorder: (fromIndex: number, toIndex: number, sentenceId?: string) => void;
  onCheck: () => void;
  quizStarted: boolean;
  onQuizStart: () => void;
}

function renderExercise(props: ScreenRendererProps) {
  const { screen, state, selectedWordId, onSelectWord, onAssign, onClear, onTextChange, onReorder, onCheck, quizStarted, onQuizStart } =
    props;

  switch (screen.type) {
    case "match":
      return (
        <MatchExercise
          config={screen}
          state={state}
          selectedWordId={selectedWordId}
          onSelectWord={onSelectWord}
          onAssign={onAssign}
          onClear={onClear}
        />
      );
    case "dialogue-fill":
      return (
        <DialogueFillExercise
          config={screen}
          state={state}
          selectedWordId={selectedWordId}
          onSelectWord={onSelectWord}
          onAssign={onAssign}
          onClear={onClear}
        />
      );
    case "sentence-drag":
      return (
        <SentenceDragExercise
          config={screen}
          state={state}
          selectedWordId={selectedWordId}
          onSelectWord={onSelectWord}
          onAssign={onAssign}
          onClear={onClear}
        />
      );
    case "categorize":
      return (
        <CategorizeExercise
          config={screen}
          state={state}
          selectedWordId={selectedWordId}
          onSelectWord={onSelectWord}
          onAssign={onAssign}
          onClear={onClear}
        />
      );
    case "dropdown":
      return <DropdownExercise config={screen} state={state} onSelect={onAssign} />;
    case "reorder":
      return <ReorderExercise config={screen} state={state} onMove={onReorder} />;
    case "reading-fill":
    case "extended-reading":
      return (
        <ReadingFillExercise config={screen} state={state} onChange={onTextChange} />
      );
    case "dictation":
      return (
        <DictationExercise config={screen} state={state} onChange={onTextChange} />
      );
    case "quiz":
      return (
        <QuizExercise
          config={screen}
          state={state}
          onSelect={onAssign}
          onExpire={onCheck}
          started={quizStarted}
          onStart={onQuizStart}
        />
      );
    case "self-writing":
      return (
        <SelfWritingExercise
          config={screen}
          state={state}
          onChange={(value) => onTextChange(SELF_WRITING_ANSWER_ID, value)}
        />
      );
    default:
      return null;
  }
}

export function ScreenRenderer(props: ScreenRendererProps) {
  const { screen, onAssign } = props;
  const content = renderExercise(props);

  if (!isWordDragScreen(screen)) {
    return content;
  }

  const words = getScreenWords(screen);
  const labelMap = Object.fromEntries(words.map((word) => [word.id, word.label]));

  return (
    <WordDragProvider
      onDrop={(targetId, wordId) => {
        if (screen.type === "categorize") {
          onAssign(wordId, targetId);
          return;
        }
        onAssign(targetId, wordId);
      }}
      getLabel={(wordId) => labelMap[wordId]}
    >
      {content}
    </WordDragProvider>
  );
}
