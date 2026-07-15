---
title: "Legal Document Intelligence System"
role: "Team Lead"
org: "Komdigi × Gadjah Mada University (AITF)"
date: 2026-06-01
featured: true
summary: "Analyzes Indonesian legal documents and regulations and produces structured daily briefs that inform policy responses at Komdigi, Indonesia's Ministry of Communication and Digital Affairs."
details:
  background: "Komdigi officials needed daily, structured insight into a large corpus of Indonesian legal articles and regulations to inform policy responses — without manually reviewing hundreds of documents."
  approach: "Led a team of 4 engineers. Architected a RAG pipeline (text-embedding-3-large on Qdrant Cloud) for dense semantic search over the legal corpus; continually pretrained the base model on scraped legal corpora, then fine-tuned Qwen3 via SFT on synthetic data to output structured JSON; deployed with vLLM on a VPS, with LangSmith tracing retrieval quality and output consistency, and model artifacts versioned on HuggingFace Hub."
  outcome: "Structured daily briefs consumed by a downstream dashboard serving Ministry of Communication and Digital officials, with reproducible model releases and observable pipeline quality."
stack: ["RAG · Qdrant", "Qwen3 SFT/CPT", "vLLM", "LangSmith", "HuggingFace"]
---
