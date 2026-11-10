#!/usr/bin/env python3
"""Sync practice match (1/x) and hints.vocabulary with lesson words in days.json."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DAYS = json.loads((ROOT / "src/data/curriculum/month-01/days.json").read_text())
PRACTICE_M1 = ROOT / "src/data/practice/month-01"

IMG = {
    "i": "pronouns/i.jpg",
    "you": "pronouns/you.jpg",
    "he": "pronouns/he.jpg",
    "she": "pronouns/she.jpg",
    "it": "pronouns/it.jpg",
    "we": "pronouns/we.jpg",
    "they": "pronouns/they.jpg",
    "student": "nouns-photo/student.jpg",
    "teacher": "nouns-photo/teacher.jpg",
    "book": "nouns-photo/book.jpg",
    "pen": "nouns-photo/pen.jpg",
    "school": "nouns-photo/school.jpg",
    "house": "nouns-photo/house.jpg",
    "bag": "nouns-photo/bag.jpg",
    "study": "verbs/study.jpg",
    "go": "verbs/go.jpg",
    "play": "verbs/play.jpg",
    "read": "verbs/read.jpg",
    "work": "verbs/work.jpg",
    "eat": "verbs/eat.jpg",
    "like": "verbs/like.jpg",
    "happy": "adjectives/happy.jpg",
    "sad": "adjectives/sad.jpg",
    "big": "adjectives/big.jpg",
    "small": "adjectives/small.jpg",
    "good": "adjectives/good.jpg",
    "new": "adjectives/new.jpg",
    "old": "adjectives/old.jpg",
    "music": "objects/music.jpg",
    "english": "objects/english.jpg",
    "football": "objects/football.jpg",
    "friend": "tobe/friend.jpg",
    "father": "tobe/father.jpg",
    "mother": "tobe/mother.jpg",
    "brother": "tobe/brother.jpg",
    "sister": "tobe/sister.jpg",
    "family": "tobe/family.jpg",
    "class": "tobe/class.jpg",
    "tired": "tobe/tired.jpg",
    "busy": "tobe/busy.jpg",
    "here": "tobe/here.jpg",
    "there": "tobe/there.jpg",
    "morning": "grammar/morning.jpg",
    "subject": "grammar/subject.jpg",
    "everyday": "grammar/everyday.jpg",
    "every day": "grammar/everyday.jpg",
    "favourite": "verbs/like.jpg",
    "favorite": "verbs/like.jpg",
    "monday": "tobe/class.jpg",
    "seven": "tobe/fifteen.jpg",
    "name": "tobe/name.jpg",
    "cat": "tobe/cat.jpg",
}


def slug(en: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", en.lower()).strip("-")


def img_key(en: str) -> str:
    low = en.lower()
    if low in IMG:
        return low
    first = low.split()[0]
    if first in IMG:
        return first
    return low


def img_path(en: str) -> str:
    k = img_key(en)
    rel = IMG.get(k, IMG.get(k.split()[0], "nouns-photo/book.jpg"))
    return f"/images/practice/{rel}"


def js_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def vocab_block(words: list) -> str:
    lines = ["    vocabulary: ["]
    for w in words:
        lines.append(f"      {{ en: {js_str(w['en'])}, vi: {js_str(w['vi'])} }},")
    lines.append("    ],")
    return "\n".join(lines)


def match_block(words: list) -> tuple[str, str]:
    wlines = []
    plines = []
    for w in words:
        s = slug(w["en"])
        wid = f"w-{s}"
        wlines.append(f'        {{ id: "{wid}", label: {js_str(w["en"])} }},')
        plines.append(
            f'        {{ id: "p-{s}", imageUrl: {js_str(img_path(w["en"]))}, '
            f'imageAlt: {js_str(w["vi"])}, label: {js_str(w["vi"])}, correctWordId: "{wid}" }},'
        )
    return "\n".join(wlines), "\n".join(plines)


SKIP_DAYS = {7, 14, 21, 28}


def patch_day(day_num: int, words: list) -> None:
    path = PRACTICE_M1 / f"day-{day_num:02d}.ts"
    if not path.exists():
        return
    text = path.read_text()

    vocab = vocab_block(words)
    if "vocabulary:" in text:
        text = re.sub(
            r"    vocabulary: \[[\s\S]*?\n    \],",
            vocab.rstrip(","),
            text,
            count=1,
        )
    else:
        text = text.replace(
            "rules: getRulesForDay",
            f"rules: getRulesForDay",
        )
        text = re.sub(
            r"(hints: \{\n      rules: getRulesForDay\(\d+, \"\"\),)\n",
            rf"\1\n{vocab}\n",
            text,
            count=1,
        )

    wlines, plines = match_block(words)
    text = re.sub(
        r"(      type: \"match\",[\s\S]*?      words: \[)[\s\S]*?(      \],\n      pairs: \[)[\s\S]*?(      \],)",
        rf"\1\n{wlines}\n\2\n{plines}\n\3",
        text,
        count=1,
    )
    path.write_text(text)
    print("vocab sync", path.name)


def main() -> None:
    for day in DAYS:
        n = day["day"]
        if n in SKIP_DAYS:
            continue
        patch_day(n, day["words"])
    print("done")


if __name__ == "__main__":
    main()
