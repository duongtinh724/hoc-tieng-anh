import json
from pathlib import Path

days = json.loads(Path("src/data/curriculum/month-01/days.json").read_text())
root = Path("src/data/practice/month-01")

IMG = {
    "i": "pronouns/i.jpg", "you": "pronouns/you.jpg", "he": "pronouns/he.jpg", "she": "pronouns/she.jpg",
    "it": "pronouns/it.jpg", "we": "pronouns/we.jpg", "they": "pronouns/they.jpg",
    "student": "nouns-photo/student.jpg", "teacher": "nouns-photo/teacher.jpg", "book": "nouns-photo/book.jpg",
    "pen": "nouns-photo/pen.jpg", "school": "nouns-photo/school.jpg", "house": "nouns-photo/house.jpg", "bag": "nouns-photo/bag.jpg",
    "study": "verbs/study.jpg", "go": "verbs/go.jpg", "play": "verbs/play.jpg", "read": "verbs/read.jpg",
    "work": "verbs/work.jpg", "eat": "verbs/eat.jpg", "like": "verbs/like.jpg",
    "happy": "adjectives/happy.jpg", "sad": "adjectives/sad.jpg", "big": "adjectives/big.jpg",
    "small": "adjectives/small.jpg", "good": "adjectives/good.jpg", "new": "adjectives/new.jpg", "old": "adjectives/old.jpg",
    "music": "objects/music.jpg", "english": "objects/english.jpg", "football": "objects/football.jpg",
    "rice": "objects/rice.jpg", "water": "objects/water.jpg",
    "friend": "tobe/friend.jpg", "father": "tobe/father.jpg", "mother": "tobe/mother.jpg",
    "brother": "tobe/brother.jpg", "family": "tobe/family.jpg", "class": "tobe/class.jpg",
    "tired": "tobe/tired.jpg", "busy": "tobe/busy.jpg", "here": "tobe/here.jpg", "there": "tobe/there.jpg",
    "fifteen": "tobe/fifteen.jpg",
}

def esc(s):
    return json.dumps(s, ensure_ascii=False)

def practice_file(day):
    n = day["day"]
    words = []
    for w in day["words"]:
        key = w["en"].split()[0].lower()
        if key in IMG and key not in [x[0] for x in words]:
            words.append((key, w["en"], w["vi"]))
    if len(words) < 4:
        for key, path in IMG.items():
            if key not in [x[0] for x in words] and len(words) < 5:
                words.append((key, key, {"student":"học sinh","book":"sách","school":"trường","pen":"bút","happy":"vui"}.get(key, key)))
    listen = day["listen"][:5]
    title = day["title"]
    match_words = "\n".join(
        f'        {{ id: "w-{k}", label: {esc(en)} }},' for k, en, vi in words
    )
    match_pairs = "\n".join(
        f'        {{ id: "p-{k}", imageUrl: "/images/practice/{IMG[k]}", imageAlt: {esc(vi)}, label: {esc(vi)}, correctWordId: "w-{k}" }},'
        for k, en, vi in words
    )
    # categorize first 4 words into two groups by vowel start — simple and always valid
    cat_rows = []
    for i, item in enumerate(listen, 1):
        low = item["en"].lower()
        group = "cat-a" if any(x in low.split() for x in ("am", "is", "are", "isn't", "aren't")) else "cat-b"
        cat_rows.append(f'        {{ id: "c-{i}", label: {esc(item["en"])}, correctCategoryId: "{group}" }},')
    if not any('cat-b' in row for row in cat_rows):
        cat_rows.append('        { id: "c-x", label: "I like music.", correctCategoryId: "cat-b" },')
    if not any('cat-a' in row for row in cat_rows):
        cat_rows.append('        { id: "c-y", label: "I am a student.", correctCategoryId: "cat-a" },')
    cat_items = "\n".join(cat_rows)
    sents = listen[:4]
    drag = []
    bank = []
    for i, item in enumerate(sents, 1):
        parts = item["en"].replace(".", "").split()
        if len(parts) < 2:
            continue
        missing = parts[1]
        bid = f"s{i}"
        bank.append(f'        {{ id: "{bid}", label: {esc(missing)} }},')
        drag.append(
            "        { id: "
            + f'"sd{i}", parts: [{{ kind: "text", value: {esc(parts[0] + " ")} }}, {{ kind: "blank", id: "b{i}", correctWordId: "{bid}" }}, {{ kind: "text", value: {esc(" " + " ".join(parts[2:]) + ".")} }}] }},'
        )
    dropdown = []
    for i, item in enumerate(listen[:4], 1):
        parts = item["en"].replace(".", "").split()
        if len(parts) < 2:
            continue
        missing = parts[-1] if len(parts) > 2 else parts[-1]
        wrong = "book" if missing.lower() != "book" else "pen"
        dropdown.append(
            "        { id: "
            + f'"q{i}", parts: [{{ kind: "text", value: {esc(" ".join(parts[:-1]) + " ")} }}, {{ kind: "select", id: "q{i}a", correctOptionId: "q{i}-ok", options: [{{ id: "q{i}-ok", label: {esc(missing)} }}, {{ id: "q{i}-no", label: {esc(wrong)} }}] }}, {{ kind: "text", value: "." }}] }},'
        )
    reorders = []
    for i, item in enumerate(listen[:5], 1):
        bits = item["en"].replace(".", "").split()
        ids = [f"s{i}{j}" for j in range(len(bits))]
        lines = ", ".join(f'{{ id: "{ids[j]}", text: {esc(bits[j])} }}' for j in range(len(bits)))
        order = ", ".join(f'"{x}"' for x in ids)
        reorders.append(f'        {{ id: "sen-{i}", label: "Câu {i}", lines: [{lines}], correctOrder: [{order}] }},')
    fills = []
    for i, item in enumerate(listen[:4], 1):
        parts = item["en"].replace(".", "").split()
        if len(parts) < 2:
            continue
        label = parts[0] + " ___ " + " ".join(parts[2:]) + "."
        fills.append(f'        {{ id: "rf{i}", label: {esc(label)}, correctAnswers: [{esc(parts[1])}] }},')
    dics = "\n".join(
        f'        {{ id: "dic-{i}", text: {esc(item["en"])}, hint: {esc(item["vi"])} }},'
        for i, item in enumerate(listen, 1)
    )
    sample = "\\n".join(item["en"] for item in listen[:4])
    body = f'''import {{ getRulesForDay }} from "@/data/curriculum/month-01/day-rules";
import {{ createPracticeMeta }} from "@/data/practice/shared";
import type {{ PracticeLesson }} from "@/types/practice";

export const practiceDay{n:02d}: PracticeLesson = {{
  meta: {{ ...createPracticeMeta({n}, {esc(title)}), totalScreens: 8 }},
  hints: {{ rules: getRulesForDay({n}, "") }},
  screens: [
    {{
      type: "match",
      title: "Match the words.\\nNối từ.",
      instruction: "Match each word with a picture.\\nNối từ với ảnh.",
      words: [
{match_words}
      ],
      pairs: [
{match_pairs}
      ],
    }},
    {{
      type: "categorize",
      title: "Sort the words.\\nPhân loại từ.",
      instruction: "Drag each word into a group.\\nKéo từ vào một nhóm.",
      categories: [
        {{ id: "cat-a", label: "Có am / is / are" }},
        {{ id: "cat-b", label: "Không có am / is / are" }},
      ],
      items: [
{cat_items}
      ],
    }},
    {{
      type: "sentence-drag",
      title: "Fill the sentence.\\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\\nKéo từ vào chỗ trống.",
      wordBank: [
{chr(10).join(bank)}
      ],
      sentences: [
{chr(10).join(drag)}
      ],
    }},
    {{
      type: "dropdown",
      title: "Choose the word.\\nChọn từ đúng.",
      instruction: "Choose the correct word.\\nChọn từ đúng.",
      questions: [
{chr(10).join(dropdown)}
      ],
    }},
    {{
      type: "reorder",
      layout: "horizontal",
      title: "Order the sentence.\\nSắp xếp câu.",
      instruction: "Drag the words into a line.\\nKéo các từ thành câu đúng.",
      lines: [],
      correctOrder: [],
      sentences: [
{chr(10).join(reorders)}
      ],
    }},
    {{
      type: "reading-fill",
      title: "Fill the line.\\nĐiền vào dòng.",
      instruction: "Type the missing word.\\nGõ từ còn thiếu.",
      passage: {esc(" ".join(item["en"] for item in listen))},
      prompts: [
{chr(10).join(fills)}
      ],
    }},
    {{
      type: "dictation",
      title: "Translate into English.\\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
{dics}
      ],
    }},
    {{
      type: "self-writing",
      title: "Write about you.\\nViết về bạn.",
      instruction: "Write 3 sentences about you.\\nViết 3 câu về bạn.",
      promptHints: [{esc(listen[0]["en"])}],
      sampleTitle: "Bài gợi ý",
      sample: {esc(chr(10).join(item["en"] for item in listen[:4]))},
    }},
  ],
}};
'''
    (root / f"day-{n:02d}.ts").write_text(body)

for day in days:
    if day["day"] == 1 or day["day"] in (7, 14, 21, 28):
        continue
    practice_file(day)
print("practice days written")
