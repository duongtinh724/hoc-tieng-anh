#!/usr/bin/env python3
"""Update practice screen 7/7 (self-writing) for all lessons."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
M1 = json.loads((ROOT / "src/data/curriculum/month-01/days.json").read_text())
M2 = json.loads((ROOT / "src/data/curriculum/month-02/days.json").read_text())
CURRICULUM = {1: {d["day"]: d for d in M1}, 2: {d["day"]: d for d in M2}}

# (month, day) → self-writing fields. Instruction must guide: bản thân + gia đình + từ/ngữ pháp buổi.
SPECS: dict[tuple[int, int], dict] = {}


def w5(day: dict) -> str:
    return ", ".join(x["en"] for x in day["words"][:5])


def add(m: int, d: int, **kwargs: object) -> None:
    SPECS[(m, d)] = kwargs


# ── Tháng 1 ──
add(
    1,
    1,
    title="Write about you and your family.\nViết về bạn và gia đình.",
    instruction=(
        "Write 4–5 sentences about you and your family. Use pronouns (I, he, she, we, they) "
        f"and words from today: {w5(CURRICULUM[1][1])}.\n"
        "Viết 4–5 câu về bạn và gia đình. Dùng đại từ (Pron) I, he, she, we, they "
        "và từ hôm nay (I, you, he, she, it, we, they)."
    ),
    promptHints=[
        "I am a student.",
        "My father is at work. He is busy.",
        "My mother is kind. She is at home.",
        "My sister and I are happy. We are students.",
        "My parents are tired. They are at home.",
    ],
    sample="I am a student.\nMy father is at work. He is busy.\nMy mother is at home. She is kind.\nMy parents are happy. They love me.",
)

add(
    1,
    2,
    title="Write about you and your family.\nViết về bạn và gia đình.",
    instruction=(
        "Write 4 sentences with am, is, or are. Say how you and your family feel or are "
        f"(happy, tired, busy, fine…). Use: {w5(CURRICULUM[1][2])}.\n"
        "Viết 4 câu có am, is, are. Nói bạn và người thân thế nào (vui, mệt, bận…). "
        "Dùng từ: happy, sad, tired, fine, student, teacher."
    ),
    promptHints=["I am fine.", "My mother is tired.", "My father is busy.", "We are happy.", "They are at school."],
    sample="I am fine.\nMy mother is tired.\nMy father is busy.\nWe are happy.",
)

add(
    1,
    3,
    title="Write about you and your family.\nViết về bạn và gia đình.",
    instruction=(
        "Write 4 affirmative sentences with am / is / are about you, your brother/sister, or parents.\n"
        "Viết 4 câu khẳng định với am / is / are về bạn, anh/chị/em, bố mẹ."
    ),
    promptHints=["I am a student.", "He is my brother.", "She is my friend.", "We are at home.", "They are teachers."],
    sample="I am a student.\nHe is my brother.\nShe is my mother.\nWe are at home.",
)

add(
    1,
    4,
    title="Write about you and your family.\nViết về bạn và gia đình.",
    instruction=(
        "Write 4 sentences: 2 about you (I am not…), 2 about family with isn't / aren't.\n"
        "Viết 4 câu: 2 về bạn (I am not…), 2 về người thân với isn't / aren't."
    ),
    promptHints=["I am not tired.", "I am not sad.", "My father isn't at home.", "My sisters aren't at school."],
    sample="I am not tired.\nI am not angry.\nMy father isn't at home.\nMy friends aren't busy.",
)

add(
    1,
    5,
    title="Ask about you and your family.\nHỏi về bạn và gia đình.",
    instruction=(
        "Write 3 Yes/No questions with am / is / are, then short answers. Ask about you or your family.\n"
        "Viết 3 câu hỏi Yes/No với am / is / are, kèm câu trả lời ngắn. Hỏi về bạn hoặc gia đình."
    ),
    promptHints=[
        "Are you a student? Yes, I am.",
        "Is your mother at home? Yes, she is.",
        "Are your parents busy? No, they aren't.",
    ],
    sample="Are you a student? Yes, I am.\nIs your sister at school? Yes, she is.\nAre they tired? No, they aren't.",
)

add(
    1,
    6,
    title="Introduce yourself and your family.\nGiới thiệu bạn và gia đình.",
    instruction=(
        "Write 4–5 sentences: your name, age, where you live, student, and one sentence about your family.\n"
        "Viết 4–5 câu: tên, tuổi, nơi ở, học sinh, và một câu về gia đình."
    ),
    promptHints=["My name is Nam.", "I am 15 years old.", "I live in Hanoi.", "I am a student.", "I have a small family."],
    sample="My name is Nam.\nI am 15 years old.\nI live in Hanoi with my family.\nI am a student.\nMy family is happy.",
)

add(
    1,
    8,
    title="Describe your room and family.\nMô tả phòng và gia đình.",
    instruction=(
        f"Write 4 sentences about things at home and people. Use nouns: {w5(CURRICULUM[1][8])}.\n"
        "Viết 4 câu về đồ vật ở nhà và người. Dùng danh từ (N): book, pen, bag, school, house…"
    ),
    promptHints=["This is my book.", "My bag is on the table.", "My father is a teacher.", "Our house is small."],
    sample="This is my book.\nMy pen is in the bag.\nMy father works at a school.\nOur house is small.",
)

add(
    1,
    9,
    title="Count things at home.\nĐếm đồ ở nhà.",
    instruction=(
        "Write 4 sentences with singular and plural nouns about your family’s things.\n"
        "Viết 4 câu có danh từ số ít và số nhiều về đồ của gia đình."
    ),
    promptHints=["I have one book.", "We have two pens.", "My parents have three bags.", "The students are in class."],
    sample="I have one book.\nWe have two pens.\nMy books are new.\nThe students are happy.",
)

add(
    1,
    10,
    title="Describe your things.\nMô tả đồ của bạn.",
    instruction=(
        "Write 4 sentences with a / an about things you or your family have.\n"
        "Viết 4 câu có a / an về đồ bạn hoặc gia đình có."
    ),
    promptHints=["I have a bag.", "She has an apple.", "He is a student.", "This is a book."],
    sample="I have a bag.\nMy sister has an eraser.\nMy father is a teacher.\nThis is a pen.",
)

add(
    1,
    11,
    title="Write about your school things.\nViết về đồ học.",
    instruction=(
        "Write 4 sentences with a, an, or the about your bag, books, and school.\n"
        "Viết 4 câu có a, an, the về cặp, sách và trường."
    ),
    promptHints=["I have a bag.", "The bag is black.", "I like English.", "The school is big."],
    sample="I have a bag.\nThe bag is black.\nI study at the school.\nEnglish is interesting.",
)

add(
    1,
    12,
    title="Point at home.\nChỉ đồ ở nhà.",
    instruction=(
        "Write 4 sentences with this, that, these, those about things and people at home.\n"
        "Viết 4 câu có this, that, these, those về đồ và người ở nhà."
    ),
    promptHints=["This is my pen.", "That is my house.", "These are my books.", "Those are my friends."],
    sample="This is my pen.\nThat is our house.\nThese are my books.\nThose are my classmates.",
)

add(
    1,
    13,
    title="Mix patterns about family.\nGhép mẫu câu về gia đình.",
    instruction=(
        "Write 4 sentences: use this/that or these/those, one with the, and one question about family.\n"
        "Viết 4 câu: có this/that hoặc these/those, một câu có the, một câu hỏi về gia đình."
    ),
    promptHints=["This is my book.", "The book is new.", "These are my parents.", "Are they at home?"],
    sample="This is my book.\nThe book is on the table.\nThese are my parents.\nAre they at home?",
)

add(
    1,
    15,
    title="Write about daily actions.\nViết việc hằng ngày.",
    instruction=(
        f"Write 4 sentences about what you and your family do. Use verbs: {w5(CURRICULUM[1][15])}.\n"
        "Viết 4 câu về việc bạn và gia đình làm. Dùng động từ (V): study, go, play, eat…"
    ),
    promptHints=["I study.", "My brother plays football.", "We eat rice.", "They read books."],
    sample="I study English.\nMy brother plays football.\nWe eat dinner together.\nThey read in the evening.",
)

add(
    1,
    16,
    title="Write S + V + O sentences.\nViết câu S + V + O.",
    instruction=(
        "Write 4 sentences S + V + O about you and family (I like music. My mother cooks rice.).\n"
        "Viết 4 câu S + V + O về bạn và gia đình."
    ),
    promptHints=["I like music.", "My mother cooks rice.", "We study English.", "They play football."],
    sample="I like music.\nMy mother cooks rice.\nWe study English.\nThey watch TV.",
)

add(
    1,
    17,
    title="What you and family have.\nBạn và gia đình có gì.",
    instruction=(
        f"Write 4 sentences with have / has. Use: {w5(CURRICULUM[1][17])}.\n"
        "Viết 4 câu có have / has về đồ bạn và người thân có."
    ),
    promptHints=["I have a book.", "My father has a car.", "We have a house.", "She has a sister."],
    sample="I have a book and a pen.\nMy father has a motorbike.\nWe have a small house.\nShe has a cat.",
)

add(
    1,
    18,
    title="Describe your home.\nMô tả ngôi nhà.",
    instruction=(
        "Write 4 sentences with There is / There are about your room or house.\n"
        "Viết 4 câu There is / There are về phòng hoặc nhà bạn."
    ),
    promptHints=["There is a bed in my room.", "There are two books.", "There is a tree.", "There are four people in my family."],
    sample="There is a desk in my room.\nThere are many books.\nThere is a small garden.\nThere are four people in my family.",
)

add(
    1,
    19,
    title="Describe people and things.\nMô tả người và đồ.",
    instruction=(
        f"Write 4 sentences with adjectives and my/your/his/her. Use: {w5(CURRICULUM[1][19])}.\n"
        "Viết 4 câu có tính từ (Adj) và my/your/his/her. Dùng: big, small, good, new, old."
    ),
    promptHints=["My house is big.", "His bag is new.", "Her school is old.", "This is my book."],
    sample="My house is big.\nHis bag is new.\nHer school is old.\nThis is my good pen.",
)

add(
    1,
    20,
    title="Write about family, school, home.\nViết về gia đình, trường, nhà.",
    instruction=(
        f"Write 4 sentences about your family, school, and house. Use: {w5(CURRICULUM[1][20])}.\n"
        "Viết 4 câu về gia đình, trường và nhà. Dùng: family, father, mother, school, house."
    ),
    promptHints=["I have a family.", "He is my father.", "She is my mother.", "I study at school.", "We live in a house."],
    sample="I have a happy family.\nHe is my father.\nShe is my mother.\nWe live in a small house near school.",
)

add(
    1,
    22,
    title="Ask about you and your things.\nHỏi về bạn và đồ vật.",
    instruction=(
        "Write 4 sentences: 2 Wh- questions (What / Who / Where) and 2 short answers about you or family.\n"
        "Viết 4 câu: 2 câu hỏi What / Who / Where và 2 câu trả lời ngắn về bạn hoặc gia đình."
    ),
    promptHints=["What is this? It is my book.", "Who is she? She is my sister.", "Where do you live? I live in Hanoi."],
    sample="What is this? It is my book.\nWho is he? He is my father.\nWhere is my school? It is here.\nI live here with my family.",
)

add(
    1,
    23,
    title="Ask about feelings and time.\nHỏi cảm xúc và thời gian.",
    instruction=(
        f"Write 4 sentences with When / Why / How about you or family. Use: {w5(CURRICULUM[1][23])}.\n"
        "Viết 4 câu When / Why / How về bạn hoặc gia đình."
    ),
    promptHints=["When is your class? It is in the morning.", "Why are you tired? Because I study a lot.", "How is your mother? She is fine."],
    sample="When is your English class? It is in the morning.\nWhy are you sad? Because I am tired.\nHow are you? I am fine.\nHow is your father? He is busy.",
)

add(
    1,
    24,
    title="Where things are at home.\nĐồ ở đâu trong nhà.",
    instruction=(
        f"Write 4 sentences with in, on, at, under about your room, bag, or family. Use: {w5(CURRICULUM[1][24])}.\n"
        "Viết 4 câu có in, on, at, under về phòng, cặp hoặc gia đình."
    ),
    promptHints=["My book is on the table.", "I am at home.", "The pen is in my bag.", "I am at school."],
    sample="My book is on the table.\nI am at home with my family.\nThe pen is in my bag.\nMy father is at work.",
)

add(
    1,
    25,
    title="Your schedule.\nLịch của bạn.",
    instruction=(
        f"Write 4 sentences about when you and family study, work, or play. Use in / on / at and: {w5(CURRICULUM[1][25])}.\n"
        "Viết 4 câu về giờ học, đi học của bạn và gia đình. Dùng in / on / at."
    ),
    promptHints=["I go to school at 7 a.m.", "I get up in the morning.", "We have class on Monday.", "I play football on Sunday."],
    sample="I go to school at 7 a.m.\nI get up in the morning.\nMy class is on Monday.\nI play football on Sunday with my friends.",
)

add(
    1,
    26,
    title="Questions about you and family.\nCâu hỏi về bạn và gia đình.",
    instruction=(
        "Write 4 questions and answers: use Are / Is / What / How / Where about you or a family member.\n"
        "Viết 4 cặp hỏi–đáp: Are / Is / What / How / Where về bạn hoặc người thân."
    ),
    promptHints=["Are you a student? Yes, I am.", "What is your name?", "How is your mother?", "Where is my book?"],
    sample="Are you a student? Yes, I am.\nIs your sister at home? Yes, she is.\nWhat is your father's name?\nHow are your parents? They are fine.",
)

add(
    1,
    27,
    title="About you and your family.\nVề bạn và gia đình.",
    instruction=(
        "Write 4–5 sentences like a short About Me: name, age, student, family, favourite subject. "
        f"You may use: {w5(CURRICULUM[1][27])}.\n"
        "Viết 4–5 câu giới thiệu: tên, tuổi, học sinh, gia đình, môn thích. "
        "Dùng từ: favourite, subject, father, mother, sister."
    ),
    promptHints=["My name is Nam.", "I am a student.", "I live with my family.", "My father is a teacher.", "My favourite subject is English."],
    sample="My name is Nam.\nI am 15 years old.\nI am a student.\nI live in Hanoi with my father, mother and sister.\nMy favourite subject is English.",
)

add(
    1,
    29,
    title="Your habits.\nThói quen của bạn.",
    instruction=(
        "Write 4 sentences: mix I am… and I study / play / like… about you and one about family. "
        f"Use: {w5(CURRICULUM[1][29])}.\n"
        "Viết 4 câu: có I am… và I study / play / like… về bạn, một câu về gia đình. "
        "Dùng: every day, study, go, play, read."
    ),
    promptHints=["I am a student.", "I study every day.", "I play football.", "My mother likes music.", "We go to school."],
    sample="I am a student.\nI study English every day.\nI play football after school.\nMy sister likes music.",
)

add(
    1,
    30,
    title="He / She in your family.\nHe / She trong gia đình.",
    instruction=(
        f"Write 4 sentences about your father, mother, or sister with verbs + -s: {w5(CURRICULUM[1][30])}.\n"
        "Viết 4 câu về bố, mẹ hoặc chị/em với động tủ (V) thêm -s: like, study, go, play, read."
    ),
    promptHints=["My father likes music.", "My mother studies English.", "My sister plays football.", "He reads books every day."],
    sample="My father likes music.\nMy mother studies English.\nMy sister plays football.\nShe goes to school every day.",
)

# ── Tháng 2 ──
add(
    2,
    1,
    title="Write about habits.\nViết về thói quen.",
    instruction=(
        "Write 4 sentences about your and your family's habits. Use every day, usually, sometimes, often.\n"
        "Viết 4 câu về thói quen của bạn và gia đình. Dùng every day, usually, sometimes, often."
    ),
    promptHints=["I study English every day.", "I usually get up at 6.", "My mother sometimes cooks.", "We often play football."],
    sample="I study English every day.\nI usually get up at 6 a.m.\nMy sister sometimes reads books.\nWe play football on Sunday.",
)

add(
    2,
    2,
    title="I / We + verb about family.\nI / We + động từ về gia đình.",
    instruction=(
        f"Write 4 sentences with I / you / we / they + verb (no -s). Use: {w5(CURRICULUM[2][2])}.\n"
        "Viết 4 câu I / you / we / they + động tủ (V) nguyên mẫu về bạn và gia đình."
    ),
    promptHints=["I live in Hanoi.", "We work hard.", "They play football.", "I eat rice every day."],
    sample="I live in Hanoi with my family.\nWe study English.\nThey play football on Sunday.\nI drink water after sport.",
)

add(
    2,
    3,
    title="He / She in your family.\nHe / She trong gia đình.",
    instruction=(
        "Write 4 sentences about your father, mother, brother, or sister. He/She + verb with -s or -es.\n"
        "Viết 4 câu về bố, mẹ, anh/chị/em: He/She + động tủ (V) có -s/-es."
    ),
    promptHints=["He goes to work.", "She studies English.", "He likes football.", "She watches TV at night."],
    sample="My father goes to work every day.\nMy mother studies English.\nMy brother likes football.\nShe watches TV at night.",
)

add(
    2,
    4,
    title="Do / Does questions about family.\nCâu hỏi Do / Does về gia đình.",
    instruction=(
        "Write 3 questions and short answers about you or family: 2 with Do, 1 with Does.\n"
        "Viết 3 câu hỏi và trả lời ngắn về bạn hoặc gia đình: 2 câu Do, 1 câu Does."
    ),
    promptHints=["Do you study English? Yes, I do.", "Do your parents work? Yes, they do.", "Does your sister like music? Yes, she does."],
    sample="Do you study English every day? Yes, I do.\nDo your friends play football? Yes, they do.\nDoes your mother like cooking? Yes, she does.",
)

add(
    2,
    5,
    title="Negative sentences about habits.\nCâu phủ định về thói quen.",
    instruction=(
        "Write 4 sentences: what you or family don't / doesn't do (don't like, doesn't eat…).\n"
        "Viết 4 câu phủ định về thói quen bạn hoặc gia đình (don't / doesn't)."
    ),
    promptHints=["I don't like coffee.", "My sister doesn't play games.", "We don't watch TV much.", "He doesn't eat fast food."],
    sample="I don't like coffee.\nMy sister doesn't play computer games.\nWe don't watch TV on weekdays.\nMy father doesn't eat much at night.",
)

add(
    2,
    6,
    title="Wh- questions about you.\nCâu hỏi Wh- về bạn.",
    instruction=(
        "Write 3 Wh- questions with do/does about you or family, then answer each in one sentence.\n"
        "Viết 3 câu hỏi Wh- với do/does về bạn hoặc gia đình, mỗi câu kèm một câu trả lời."
    ),
    promptHints=["What do you study? I study English.", "Where does your father work?", "How often do you play sport?"],
    sample="What do you study? I study English.\nWhere does your mother work? She works at a hospital.\nHow often do you play football? I play twice a week.",
)


def ts(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def render_block(spec: dict) -> str:
    hints = ",\n".join(f"        {ts(h)}" for h in spec["promptHints"])
    return f"""    {{
      type: "self-writing",
      title: {ts(spec["title"])},
      instruction: {ts(spec["instruction"])},
      promptHints: [
{hints}
      ],
      sampleTitle: "Bài gợi ý",
      sample: {ts(spec["sample"])},
    }},"""


def patch_file(path: Path, spec: dict) -> bool:
    text = path.read_text()
    if 'type: "self-writing"' not in text:
        return False
    block = render_block(spec)
    pattern = r"    \{\n      type: \"self-writing\",[\s\S]*?\n    \},"
    new_text, n = re.subn(pattern, lambda _m: block, text, count=1)
    if n != 1:
        print("WARN skip", path, "replacements", n)
        return False
    path.write_text(new_text)
    return True


def main() -> None:
    changed = 0
    for path in sorted((ROOT / "src/data/practice").rglob("day-*.ts")):
        if path.name.endswith("-exam.ts"):
            continue
        # parse month-XX/day-YY.ts
        m = int(path.parent.name.split("-")[1])
        d = int(path.stem.split("-")[1])
        key = (m, d)
        if key not in SPECS:
            if m in CURRICULUM and d in CURRICULUM[m]:
                day = CURRICULUM[m][d]
                SPECS[key] = {
                    "title": "Write about you and your family.\nViết về bạn và gia đình.",
                    "instruction": (
                        f"Write 4 sentences about you and your family. Use today's lesson ({day['title']}) "
                        f"and words: {w5(day)}.\n"
                        f"Viết 4 câu về bạn và gia đình. Dùng bài hôm nay ({day['title']}) "
                        f"và từ: {w5(day)}."
                    ),
                    "promptHints": [x["en"] for x in day["listen"][:4]],
                    "sample": "\n".join(x["en"] for x in day["listen"][:4]),
                }
            else:
                continue
        if patch_file(path, SPECS[key]):
            changed += 1
            print("updated", path.relative_to(ROOT))
    print(f"done: {changed} files")


if __name__ == "__main__":
    main()
