// Auto-discovers resume files at build time (design.md Section 6a).
// To update the resume: replace the file(s) in src/assets/resume/ and rebuild.
// No filenames are hardcoded — a new format appears as a new button automatically.

const files = import.meta.glob('/src/assets/resume/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const FORMAT_LABELS: Record<string, string> = {
  pdf: 'PDF',
  doc: 'Word',
  docx: 'Word',
  odt: 'OpenDocument',
};

export interface ResumeFile {
  url: string;
  ext: string;
  formatLabel: string;
  downloadName: string;
}

export const resumeFiles: ResumeFile[] = Object.entries(files)
  .map(([path, url]) => {
    const ext = path.split('.').pop()!.toLowerCase();
    return {
      url,
      ext,
      formatLabel: FORMAT_LABELS[ext] ?? ext.toUpperCase(),
      downloadName: `Resume - Muhammad Zidan Arsyad.${ext}`,
    };
  })
  .sort((a, b) => (a.ext === 'pdf' ? -1 : b.ext === 'pdf' ? 1 : 0)); // PDF first

export const resumePdf = resumeFiles.find((f) => f.ext === 'pdf');
