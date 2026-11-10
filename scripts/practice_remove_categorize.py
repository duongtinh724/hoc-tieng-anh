#!/usr/bin/env python3
"""Remove categorize screen (2/8) and fix totalScreens in practice day files."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PRACTICE = ROOT / "src/data/practice"

CATEGORIZE_BLOCK = re.compile(
    r"\n    \{\n      type: \"categorize\",.*?\n    \},",
    re.DOTALL,
)


def patch_file(path: Path) -> bool:
    text = path.read_text()
    if 'type: "categorize"' not in text:
        return False
    new = CATEGORIZE_BLOCK.sub("", text)
    new = re.sub(r"totalScreens: 9\b", "totalScreens: 8", new)
    new = re.sub(r"totalScreens: 8\b", "totalScreens: 7", new)
    if new != text:
        path.write_text(new)
        return True
    return False


def main() -> None:
    changed = 0
    for path in sorted(PRACTICE.rglob("day-*.ts")):
        if path.name.endswith("-exam.ts"):
            continue
        if patch_file(path):
            changed += 1
            print("patched", path.relative_to(ROOT))
    shared = PRACTICE / "shared.ts"
    st = shared.read_text()
    st2 = st.replace("totalScreens: 8,", "totalScreens: 7,")
    if st2 != st:
        shared.write_text(st2)
        print("patched shared.ts")
    print(f"done, {changed} files")


if __name__ == "__main__":
    main()
