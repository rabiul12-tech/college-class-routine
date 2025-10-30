export function isFreePeriod(subject: string | undefined | null): boolean {
  if (!subject) return true;
  const clean = subject.trim();
  if (clean === "" || clean === "---") return true;
  return false;
}

export function displaySubjectName(subject: string | undefined | null): string {
  if (!subject || subject.trim() === "" || subject.trim() === "---") {
    return "ফাঁকা পিরিয়ড (---)";
  }
  return subject;
}
