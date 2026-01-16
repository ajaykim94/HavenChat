# HavenChat

# HavenChat — AI-Powered Emotional Support Assistant (RAG)

HavenChat is a full-stack AI application that provides **general emotional support** through grounded, evidence-based responses.  
It uses a **Retrieval-Augmented Generation (RAG)** pipeline to ensure answers are sourced from curated resources, with a strong emphasis on **responsible AI**, transparency, and user safety.

> ⚠️ **Disclaimer**  
> HavenChat is **not a licensed therapist**, does **not provide medical advice**, and is **not for emergencies**.  
> If you are in immediate danger, please contact local emergency services or a crisis hotline (e.g., U.S. 988).

---

## ✨ Key Features

- 🔐 **User Authentication**  
  Secure login via Supabase Auth (email/password, optional OAuth).

- 💬 **Chat-Based Emotional Support**  
  Conversational interface focused on validation, coping strategies, and reflection.

- 📚 **Retrieval-Augmented Generation (RAG)**  
  - Retrieves relevant context from a curated knowledge base using vector search  
  - Responses are grounded in retrieved content only  
  - Each assistant message includes **source citations**

- 🧠 **Curated Knowledge Base**  
  Admin-managed documents covering:
  - Grounding techniques  
  - Breathing exercises  
  - Emotional validation  
  - Stress management  
  - Journaling prompts  
  - Guidance on when to seek professional help  

- 🛡️ **Safety & Responsible AI Guardrails**
  - Clear non-therapy disclaimer
  - Crisis detection with escalation panel (e.g., U.S. 988)
  - No diagnosis, medical advice, or self-harm instructions
  - Refusal behavior for unsafe requests

- 🗂️ **Chat History & Privacy**
  - Conversations stored per user
  - Row Level Security (RLS) ensures users can only access their own data
  - Users can delete or export conversations

---

## 🏗️ System Architecture

**Frontend**
- Built and deployed using **Lovable Cloud**
- Responsive, calm UI with dark mode
- Streaming chat responses and conversation sidebar

**Backend**
- **Supabase**
  - Auth (user accounts)
  - Postgres + `pgvector` for embeddings
  - Secure storage of chats, messages, documents, and chunks

**RAG Pipeline**
1. User submits a message
2. Message is embedded
3. Top-k relevant chunks retrieved via cosine similarity
4. Assistant generates a response grounded in retrieved chunks
5. Sources are displayed to the user

---

## 🧱 Database Schema (High-Level)

- `documents` — uploaded source documents (title, source, license)
- `chunks` — embedded text chunks with metadata
- `chats` — user chat sessions
- `messages` — individual messages with citations

Row Level Security (RLS) ensures:
- Users can only read/write their own chats and messages
- Knowledge base is read-only for users, writeable by admin

---

## 🧪 Responsible AI Design

HavenChat was designed with safety and ethics as first-class concerns:

- Grounded responses only (no hallucinated advice)
- Transparent citations for every answer
- Explicit refusal boundaries
- Crisis detection and escalation
- Privacy-first data handling

This makes HavenChat suitable as a **portfolio project demonstrating applied, responsible AI**, not a clinical tool.

---

## 🛠️ Tech Stack

- **Frontend:** Lovable Cloud
- **Backend:** Supabase (Auth, Postgres, pgvector)
- **NLP:** Embeddings + RAG pipeline
- **Auth & Security:** Supabase Auth + RLS
- **Deployment:** Lovable Publish

---

## 🚀 Getting Started (Local / Dev)

> This project is primarily built and deployed via Lovable Cloud.

To reproduce core functionality:
1. Create a Supabase project
2. Enable Auth providers
3. Enable `pgvector`
4. Create tables (`documents`, `chunks`, `chats`, `messages`)
5. Connect Supabase to Lovable
6. Upload curated documents via the Admin page

---

## 📌 Future Enhancements

- RAG quality evaluation (groundedness scoring)
- Multi-mode support (reflection, grounding, journaling)
- Conversation summaries
- Model comparison (retrieval strategies)
- International crisis resources

---

## 👤 Author

**Augustin Kim**  
UC Berkeley — Master of Information and Data Science  
Former U.S. Army Signals Analyst  

---

## 📄 License

This project is intended for **educational and portfolio use only**.
