/*
 * SMART LIBRARY MANAGEMENT SYSTEM USING FUNDAMENTAL DATA STRUCTURES
 * Meeva Maria Benny | Amal Jyothi College of Engineering | CSE
 *
 * ONE FILE = whole website. Needs JDK 17+ (no libraries, no compile step):
 *        java SmartLibrary.java          (then open http://localhost:8080)
 *        java SmartLibrary.java 9090     (use another port)
 *
 * Data structures used (all hand-written, no java.util collections):
 *   Parallel arrays + sorted insertion/shifting ... books
 *   Linear search / Binary search .................. find books
 *   Queue (singly linked list, FIFO) ............... reservations
 *   Stack (array, LIFO) ............................ recently returned books
 *   Doubly linked list ............................. activity log
 *   Stack (infix->postfix) & first/best/worst fit .. DS Lab
 */
import com.sun.net.httpserver.*;
import java.io.*; import java.net.*; import java.nio.charset.StandardCharsets; import java.nio.file.*;
import java.util.HashMap; import java.util.Map;


/** Tiny web server (JDK built-in) exposing the library as a JSON API + serving web/index.html */
public class SmartLibrary {
    static final Library lib = new Library();

    public static void main(String[] args) throws Exception {
        int port = args.length > 0 ? Integer.parseInt(args[0]) : 8080;
        HttpServer s = HttpServer.create(new InetSocketAddress(port), 0);
        s.createContext("/", SmartLibrary::handle); s.start();
        System.out.println("Smart Library running -> http://localhost:" + port);
        try { java.awt.Desktop.getDesktop().browse(URI.create("http://localhost:" + port)); } catch (Throwable t) { /* open the link manually */ }
    }

    static synchronized void handle(HttpExchange ex) throws IOException {
        String path = ex.getRequestURI().getPath(), type = "application/json; charset=utf-8"; byte[] out; int code = 200;
        try {
            if (path.equals("/") || path.equals("/index.html")) { out = PAGE.getBytes(StandardCharsets.UTF_8); type = "text/html; charset=utf-8"; }
            else if (path.startsWith("/api/")) out = api(path.substring(5), params(ex)).getBytes(StandardCharsets.UTF_8);
            else { code = 404; out = "Not found".getBytes(); type = "text/plain"; }
        } catch (Exception e) { code = 200; out = res("ERR:Please fill every field with valid values.").getBytes(StandardCharsets.UTF_8); }
        ex.getResponseHeaders().set("Content-Type", type); ex.sendResponseHeaders(code, out.length);
        try (OutputStream o = ex.getResponseBody()) { o.write(out); }
    }

    static Map<String, String> params(HttpExchange ex) throws IOException {
        Map<String, String> m = new HashMap<>();
        String raw = ex.getRequestURI().getRawQuery(); String body = new String(ex.getRequestBody().readAllBytes(), StandardCharsets.UTF_8);
        for (String src : new String[]{raw == null ? "" : raw, body})
            for (String kv : src.split("&")) { int e = kv.indexOf('=');
                if (e > 0) m.put(URLDecoder.decode(kv.substring(0, e), StandardCharsets.UTF_8), URLDecoder.decode(kv.substring(e + 1), StandardCharsets.UTF_8)); }
        return m;
    }

    static String res(String r) { boolean ok = r.startsWith("OK:"); return "{\"ok\":" + ok + ",\"msg\":" + Library.q(r.substring(r.indexOf(':') + 1)) + "}"; }
    static int num(Map<String, String> p, String k) { return Integer.parseInt(p.getOrDefault(k, "").trim()); }

    static String api(String op, Map<String, String> p) {
        switch (op) {
            case "state":   return lib.stateJson();
            case "add":     return res(lib.add(num(p, "id"), p.getOrDefault("title", ""), p.getOrDefault("author", "")));
            case "issue":   return res(lib.issue(num(p, "id"), p.getOrDefault("member", "")));
            case "reserve": return res(lib.reserve(num(p, "id"), p.getOrDefault("member", "")));
            case "return":  return res(lib.giveBack(num(p, "id")));
            case "reshelve":return res(lib.reshelve());
            case "search":  return lib.linearSearch(p.getOrDefault("q", ""));
            case "bsearch": return lib.binarySearchJson(num(p, "id"));
            case "expr":    return Algo.expr(p.getOrDefault("e", ""));
            case "alloc":   return Algo.alloc(p.getOrDefault("blocks", ""), p.getOrDefault("procs", ""), p.getOrDefault("scheme", "first"));
            default:        return res("ERR:Unknown operation");
        }
    }

// Hand-written data structures (no java.util collections) - Module 2 & Module 3

/** MODULE 2: array-based stack (LIFO). When full, the oldest entry is dropped. */
static class ArrayStack {
    private final String[] a; private int top = -1;
    ArrayStack(int n) { a = new String[n]; }
    boolean empty() { return top < 0; }
    void push(String s) {
        if (top == a.length - 1) { for (int i = 1; i <= top; i++) a[i - 1] = a[i]; top--; }
        a[++top] = s;
    }
    String pop() { return empty() ? null : a[top--]; }
    String peek() { return empty() ? null : a[top]; }
    int size() { return top + 1; }
    String get(int fromTop) { return a[top - fromTop]; }
}

/** MODULE 3: node shared by the linked structures below. */
static class Node { int id; String data; Node next, prev; Node(int id, String d) { this.id = id; data = d; } }

/** MODULE 3: queue (FIFO) built on a singly linked list; used for book reservations. */
static class LinkedQueue {
    Node head, tail; int size;
    void enqueue(int bookId, String member) {
        Node n = new Node(bookId, member);
        if (tail == null) head = tail = n; else { tail.next = n; tail = n; }
        size++;
    }
    /** Removes and returns the OLDEST reservation for the given book (FIFO per book). */
    Node dequeueFor(int bookId) {
        Node prev = null, cur = head;
        while (cur != null && cur.id != bookId) { prev = cur; cur = cur.next; }
        if (cur == null) return null;
        if (prev == null) head = cur.next; else prev.next = cur.next;
        if (cur == tail) tail = prev;
        size--; cur.next = null; return cur;
    }
    int position(int bookId, String member) {   // 1-based position among that book's queue, 0 if absent
        int pos = 0;
        for (Node c = head; c != null; c = c.next) if (c.id == bookId) { pos++; if (c.data.equalsIgnoreCase(member)) return pos; }
        return 0;
    }
    Node firstFor(int bookId) { Node c = head; while (c != null && c.id != bookId) c = c.next; return c; }
    int countFor(int bookId) { int k = 0; for (Node c = head; c != null; c = c.next) if (c.id == bookId) k++; return k; }
}

/** MODULE 3: doubly linked list; newest-first activity log. */
static class DList {
    Node head, tail; int size;
    void addFront(String s) {
        Node n = new Node(0, s);
        if (head == null) head = tail = n; else { n.next = head; head.prev = n; head = n; }
        if (++size > 50) { tail = tail.prev; tail.next = null; size--; }   // keep last 50 events
    }
}
/** Smart Library core: parallel arrays + stack + queue + searching. */
static class Library {
    static final int CAP = 100;
    // MODULE 2: parallel arrays, kept sorted by ID so binary search works
    int[] ids = new int[CAP]; String[] titles = new String[CAP], authors = new String[CAP], borrower = new String[CAP];
    boolean[] avail = new boolean[CAP]; int n = 0;
    LinkedQueue reservations = new LinkedQueue();   // FIFO
    ArrayStack recent = new ArrayStack(8);          // LIFO
    DList log = new DList();

    Library() {
        add(101, "Data Structures in Java", "Robert Lafore"); add(102, "Introduction to Algorithms", "Thomas Cormen");
        add(103, "Clean Code", "Robert C. Martin"); add(104, "Operating System Concepts", "Abraham Silberschatz");
        add(105, "Let Us C", "Yashavant Kanetkar");
    }

    int binarySearch(int id, int[] steps) {
        int lo = 0, hi = n - 1;
        while (lo <= hi) { steps[0]++; int mid = (lo + hi) / 2;
            if (ids[mid] == id) return mid; if (ids[mid] < id) lo = mid + 1; else hi = mid - 1; }
        return -1;
    }

    String add(int id, String t, String a) {
        t = t.trim(); a = a.trim();
        if (id <= 0 || t.isEmpty() || a.isEmpty()) return "ERR:Enter a positive ID, title and author.";
        if (n == CAP) return "ERR:Shelf is full (" + CAP + " books).";
        if (binarySearch(id, new int[1]) >= 0) return "ERR:Duplicate ID " + id + " - a book with this ID already exists.";
        for (int i = 0; i < n; i++) if (titles[i].equalsIgnoreCase(t) && authors[i].equalsIgnoreCase(a)) return "ERR:This title by the same author already exists (ID " + ids[i] + ").";
        int pos = 0; while (pos < n && ids[pos] < id) pos++;
        for (int i = n; i > pos; i--) { ids[i] = ids[i-1]; titles[i] = titles[i-1]; authors[i] = authors[i-1]; avail[i] = avail[i-1]; borrower[i] = borrower[i-1]; } // shift right
        ids[pos] = id; titles[pos] = t; authors[pos] = a; avail[pos] = true; borrower[pos] = null; n++;
        log.addFront("Added book #" + id + " \"" + t + "\"");
        return "OK:Added \"" + t + "\" at array index " + pos + ".";
    }

    boolean inStack(int id) { for (int k = 0; k < recent.size(); k++) if (recent.get(k).startsWith(id + "|")) return true; return false; }

    /** ISSUE: only if on the shelf; if reservations exist only the FRONT of the queue (FIFO) may borrow. */
    String issue(int id, String m) {
        m = m.trim(); if (m.isEmpty()) return "ERR:Enter the member name.";
        int i = binarySearch(id, new int[1]); if (i < 0) return "ERR:No book with ID " + id + ".";
        if (!avail[i]) return "ERR:Book is currently issued to " + borrower[i] + ". Use Reserve Book to join the queue.";
        if (inStack(id)) return "ERR:This book was just returned and is awaiting reshelving. Reshelve it first.";
        Node f = reservations.firstFor(id);
        if (f != null && !f.data.equalsIgnoreCase(m)) return "ERR:Reserved for " + f.data + " (front of the queue). They must borrow it first.";
        if (f != null) reservations.dequeueFor(id);
        avail[i] = false; borrower[i] = m; log.addFront(m + " borrowed #" + id);
        return "OK:Issued \"" + titles[i] + "\" to " + m + (f != null ? " (reservation fulfilled, removed from queue)." : ".");
    }

    /** RESERVE: enqueue (FIFO) when the book is not available on the shelf. */
    String reserve(int id, String m) {
        m = m.trim(); if (m.isEmpty()) return "ERR:Enter the member name.";
        int i = binarySearch(id, new int[1]); if (i < 0) return "ERR:No book with ID " + id + ".";
        if (avail[i] && !inStack(id) && reservations.countFor(id) == 0) return "ERR:Book is available on the shelf - use Issue Book instead.";
        if (m.equalsIgnoreCase(borrower[i])) return "ERR:" + m + " already has this book.";
        if (reservations.position(id, m) > 0) return "ERR:" + m + " is already in the queue for this book.";
        reservations.enqueue(id, m); int p = reservations.position(id, m);
        log.addFront(m + " reserved #" + id + " (queue position " + p + ")");
        return "OK:" + m + " added to the reservation queue for \"" + titles[i] + "\" at position " + p + ".";
    }

    /** RETURN: book goes onto the stack (LIFO) of recently returned items awaiting reshelving. */
    String giveBack(int id) {
        int i = binarySearch(id, new int[1]); if (i < 0) return "ERR:No book with ID " + id + ".";
        if (avail[i]) return "ERR:This book is not currently issued.";
        String from = borrower[i]; avail[i] = true; borrower[i] = null; recent.push(id + "|" + titles[i]);
        log.addFront(from + " returned #" + id + " (pushed on return stack)");
        Node f = reservations.firstFor(id);
        return "OK:Returned by " + from + " and pushed on the stack for reshelving." + (f != null ? " Next reservation: " + f.data + "." : "");
    }

    /** RESHELVE: pop the most recently returned book (LIFO). */
    String reshelve() {
        String s = recent.pop(); if (s == null) return "ERR:No returned books waiting to be reshelved.";
        int id = Integer.parseInt(s.substring(0, s.indexOf('|'))); Node f = reservations.firstFor(id);
        log.addFront("Reshelved #" + s.replace("|", " "));
        return "OK:Reshelved (LIFO pop): " + s.substring(s.indexOf('|') + 1) + "." + (f != null ? " " + f.data + " is first in line to borrow it." : "");
    }

    // ---------- JSON helpers ----------
    static String q(String s) { return s == null ? "null" : "\"" + s.replace("\\", "\\\\").replace("\"", "\\\"") + "\""; }
    String bookJson(int i) {
        return "{\"id\":" + ids[i] + ",\"title\":" + q(titles[i]) + ",\"author\":" + q(authors[i]) + ",\"available\":" + avail[i] + ",\"status\":" + q(!avail[i] ? "issued" : inStack(ids[i]) ? "returned" : "available")
            + ",\"borrower\":" + q(borrower[i]) + ",\"waiting\":" + reservations.countFor(ids[i]) + "}";
    }
    String stateJson() {
        StringBuilder b = new StringBuilder("{\"books\":[");
        for (int i = 0; i < n; i++) b.append(i > 0 ? "," : "").append(bookJson(i));
        b.append("],\"reservations\":[");
        boolean f = true; for (Node c = reservations.head; c != null; c = c.next) { b.append(f ? "" : ",").append("{\"id\":" + c.id + ",\"member\":" + q(c.data) + "}"); f = false; }
        b.append("],\"stack\":["); for (int k = 0; k < recent.size(); k++) b.append(k > 0 ? "," : "").append(q(recent.get(k)));
        b.append("],\"log\":["); f = true; for (Node c = log.head; c != null; c = c.next) { b.append(f ? "" : ",").append(q(c.data)); f = false; }
        return b.append("]}").toString();
    }
    String linearSearch(String kw) {
        kw = kw.trim().toLowerCase(); int cmp = 0; StringBuilder b = new StringBuilder(); boolean f = true;
        for (int i = 0; i < n; i++) { cmp++;
            if (!kw.isEmpty() && (titles[i].toLowerCase().contains(kw) || authors[i].toLowerCase().contains(kw))) { b.append(f ? "" : ",").append(bookJson(i)); f = false; } }
        return "{\"ok\":true,\"comparisons\":" + cmp + ",\"results\":[" + b + "]}";
    }
    String binarySearchJson(int id) {
        int[] s = {0}; int i = binarySearch(id, s);
        return "{\"ok\":true,\"steps\":" + s[0] + ",\"book\":" + (i < 0 ? "null" : bookJson(i)) + "}";
    }
}
/** DS Lab: stack applications (Module 2) and memory allocation schemes (Module 3). */
static class Algo {
    static int prec(String o) { return o.equals("^") ? 3 : (o.equals("*") || o.equals("/")) ? 2 : (o.equals("+") || o.equals("-")) ? 1 : 0; }

    /** Infix -> postfix with an array stack, then postfix evaluation with a second stack. */
    static String expr(String e) {
        ArrayStack st = new ArrayStack(100); StringBuilder out = new StringBuilder(); StringBuilder tok = new StringBuilder(); StringBuilder steps = new StringBuilder();
        e = e + " ";
        for (int i = 0; i < e.length(); i++) {
            char c = e.charAt(i);
            if (Character.isLetterOrDigit(c) || c == '.') { tok.append(c); continue; }
            if (tok.length() > 0) { out.append(tok).append(' '); steps.append("operand ").append(tok).append(" -> output; "); tok.setLength(0); }
            if (c == ' ') continue;
            String s = String.valueOf(c);
            if (c == '(') st.push(s);
            else if (c == ')') { while (!st.empty() && !st.peek().equals("(")) out.append(st.pop()).append(' '); if (st.empty()) return SmartLibrary.res("ERR:Unbalanced parentheses."); st.pop(); }
            else if (prec(s) > 0) {
                while (!st.empty() && prec(st.peek()) > 0 && (prec(st.peek()) > prec(s) || (prec(st.peek()) == prec(s) && !s.equals("^")))) out.append(st.pop()).append(' ');
                st.push(s); steps.append("push '").append(s).append("'; ");
            } else return SmartLibrary.res("ERR:Unsupported character '" + c + "'.");
        }
        while (!st.empty()) { String t = st.pop(); if (t.equals("(")) return SmartLibrary.res("ERR:Unbalanced parentheses."); out.append(t).append(' '); }
        String post = out.toString().trim(), value = "null";
        try {   // evaluate only if all operands are numbers
            double[] v = new double[100]; int top = -1;
            for (String t : post.split(" ")) {
                if (prec(t) > 0 && t.length() == 1) { if (top < 1) throw new RuntimeException(); double b = v[top--], a = v[top--];
                    v[++top] = t.equals("+") ? a + b : t.equals("-") ? a - b : t.equals("*") ? a * b : t.equals("/") ? a / b : Math.pow(a, b); }
                else v[++top] = Double.parseDouble(t);
            }
            if (top == 0) value = String.valueOf(v[0] == Math.floor(v[0]) && Math.abs(v[0]) < 1e15 ? (Object) (long) v[0] : (Object) v[0]);
        } catch (RuntimeException ex) { value = "null"; }
        return "{\"ok\":true,\"postfix\":" + Library.q(post) + ",\"value\":" + value + ",\"steps\":" + Library.q(steps.toString()) + "}";
    }

    /** First fit / best fit / worst fit memory allocation. */
    static String alloc(String bs, String ps, String scheme) {
        int[] rem = parse(bs), proc = parse(ps); if (rem.length == 0 || proc.length == 0) return SmartLibrary.res("ERR:Enter block and process sizes, e.g. 100,500,200");
        StringBuilder r = new StringBuilder();
        for (int k = 0; k < proc.length; k++) {
            int pick = -1;
            for (int i = 0; i < rem.length; i++) if (rem[i] >= proc[k]) {
                if (pick == -1 || (scheme.equals("best") && rem[i] < rem[pick]) || (scheme.equals("worst") && rem[i] > rem[pick])) pick = i;
                if (scheme.equals("first")) break;
            }
            if (pick >= 0) rem[pick] -= proc[k];
            r.append(k > 0 ? "," : "").append("{\"size\":" + proc[k] + ",\"block\":" + (pick < 0 ? -1 : pick + 1) + "}");
        }
        StringBuilder rm = new StringBuilder(); for (int i = 0; i < rem.length; i++) rm.append(i > 0 ? "," : "").append(rem[i]);
        return "{\"ok\":true,\"allocations\":[" + r + "],\"remaining\":[" + rm + "]}";
    }
    static int[] parse(String s) {
        String[] t = s.trim().isEmpty() ? new String[0] : s.trim().split("[,\\s]+"); int[] a = new int[t.length];
        for (int i = 0; i < t.length; i++) a[i] = Integer.parseInt(t[i]); return a;
    }
}

    static final String PAGE = """
<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Smart Library Management System</title>
<style>
:root{--bg:#eef1f7;--ink:#1b2437;--mute:#6c7690;--navy:#141b34;--a1:#6c5ce7;--a2:#00b8a9;--line:#e4e8f1;--ok:#12a066;--bad:#e5484d;--warn:#e8a010}
*{box-sizing:border-box}body{margin:0;font-family:'Segoe UI',system-ui,Arial,sans-serif;background:var(--bg);color:var(--ink)}
header{background:linear-gradient(120deg,var(--navy),#2b2d77 55%,var(--a1));color:#fff;padding:26px 34px;position:relative;overflow:hidden}
header:after{content:'';position:absolute;right:-60px;top:-80px;width:280px;height:280px;border-radius:50%;background:radial-gradient(circle,rgba(0,184,169,.55),transparent 70%)}
header h1{margin:0;font-size:27px;letter-spacing:.2px;position:relative}header p{margin:6px 0 0;opacity:.8;font-size:13px;position:relative}
.chips{margin-top:12px;position:relative}.chips span{display:inline-block;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.2);padding:3px 11px;border-radius:20px;font-size:12px;margin:0 6px 6px 0}
#banner{display:none;background:#ffe9ea;color:var(--bad);padding:12px 34px;font-size:14px}
.wrap{display:flex;max-width:1200px;margin:22px auto;gap:20px;padding:0 18px}
nav{width:230px;flex-shrink:0;background:var(--navy);border-radius:16px;padding:12px;height:fit-content;box-shadow:0 10px 30px rgba(20,27,52,.25)}
nav button{display:block;width:100%;text-align:left;border:0;background:none;color:#aeb6d3;padding:11px 14px;margin-bottom:3px;border-radius:10px;font-size:14px;cursor:pointer;transition:.15s}
nav button:hover{background:rgba(255,255,255,.07);color:#fff}nav button.on{background:linear-gradient(90deg,var(--a1),#8573ff);color:#fff;box-shadow:0 4px 14px rgba(108,92,231,.5)}
main{flex:1;min-width:0}section{display:none;animation:in .3s}section.on{display:block}@keyframes in{from{opacity:0;transform:translateY(8px)}to{opacity:1}}
.card{background:#fff;border-radius:16px;padding:22px;margin-bottom:18px;box-shadow:0 4px 18px rgba(30,40,80,.07);border:1px solid var(--line)}
.card h3{margin:0 0 6px;font-size:19px}.tag{font-size:11.5px;color:var(--a1);background:#efedff;padding:3px 10px;border-radius:20px;display:inline-block;margin-bottom:14px;font-weight:600}
input,select{width:100%;padding:11px 13px;margin:5px 0 10px;border:1.5px solid var(--line);border-radius:10px;font-size:14px;background:#fafbff;outline:0;transition:.15s}
input:focus,select:focus{border-color:var(--a1);box-shadow:0 0 0 3px rgba(108,92,231,.15);background:#fff}
.go{background:linear-gradient(90deg,var(--a1),#8573ff);color:#fff;border:0;padding:11px 22px;border-radius:10px;cursor:pointer;font-size:14px;font-weight:600;box-shadow:0 5px 14px rgba(108,92,231,.35);transition:.15s}.go:hover{transform:translateY(-1px)}
.go.teal{background:linear-gradient(90deg,#00a99b,var(--a2));box-shadow:0 5px 14px rgba(0,184,169,.35)}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:12px;margin-bottom:18px}
.stat{background:#fff;border-radius:14px;padding:14px 16px;border:1px solid var(--line);box-shadow:0 4px 14px rgba(30,40,80,.06)}.stat b{display:block;font-size:26px;margin-top:2px}.stat span{font-size:12px;color:var(--mute)}
.stat:nth-child(1) b{color:var(--a1)}.stat:nth-child(2) b{color:var(--ok)}.stat:nth-child(3) b{color:var(--bad)}.stat:nth-child(4) b{color:var(--a2)}.stat:nth-child(5) b{color:var(--warn)}
table{width:100%;border-collapse:collapse;font-size:14px}th,td{text-align:left;padding:11px 10px;border-bottom:1px solid var(--line)}th{color:var(--mute);font-size:11.5px;text-transform:uppercase;letter-spacing:.6px}tr:hover td{background:#fafbff}
.pill{padding:4px 11px;border-radius:20px;font-size:12px;font-weight:600;white-space:nowrap}.available{background:#dcf5ea;color:var(--ok)}.issued{background:#ffe3e4;color:var(--bad)}.returned{background:#fff1d3;color:#a56d00}
#toast{position:fixed;bottom:24px;right:24px;padding:14px 20px;border-radius:12px;color:#fff;display:none;max-width:400px;font-size:14px;z-index:9;box-shadow:0 10px 30px rgba(0,0,0,.25)}
.item{padding:11px 14px;border:1.5px solid var(--line);border-radius:10px;margin-bottom:8px;font-size:14px;background:#fafbff}.item.first{border-color:var(--a1);background:#efedff;font-weight:600}
.mute{color:var(--mute);font-size:13px}.blk{display:inline-block;padding:7px 12px;margin:3px;border-radius:8px;background:#efedff;color:var(--a1);font-weight:600;font-size:13px}
.log div{font-size:13px;padding:7px 0;border-bottom:1px dashed var(--line)}.two{display:grid;grid-template-columns:1fr 1fr;gap:18px}
@media(max-width:820px){.wrap{flex-direction:column}nav{width:100%;display:flex;flex-wrap:wrap;gap:4px}nav button{width:auto;margin:0}.two{grid-template-columns:1fr}}
</style></head><body>
<header><h1>&#128218; Smart Library Management System</h1><p>Automating inventory, reservations and returns with fundamental data structures</p>
<div class="chips"><span>Parallel Arrays</span><span>Queue &middot; FIFO</span><span>Stack &middot; LIFO</span><span>Linear Search</span><span>Linked Lists</span><span>Java SE</span></div></header>
<div id="banner"></div>
<div class="wrap"><nav id="nav"></nav><main>

<section id="add"><div class="card"><h3>&#10133; Add Book</h3><span class="tag">Stored in parallel arrays &middot; duplicates rejected</span>
 <input id="aid" type="number" placeholder="Book ID (e.g. 120)"><input id="atitle" placeholder="Title"><input id="aauthor" placeholder="Author">
 <button class="go" id="b_add">Add Book</button></div></section>

<section id="view"><div class="stats" id="stats"></div>
 <div class="card"><h3>&#128214; All Books</h3><span class="tag">Sorted by ID &middot; live availability</span>
 <table><thead><tr><th>ID</th><th>Title</th><th>Author</th><th>Status</th><th>Waiting</th></tr></thead><tbody id="books"></tbody></table></div>
 <div class="card"><h3>&#128338; Activity Log</h3><span class="tag">Doubly linked list &middot; newest first</span><div class="log" id="log"></div></div></section>

<section id="search"><div class="card"><h3>&#128269; Search Book (Linear Search)</h3><span class="tag">Scans the arrays one by one &middot; title or author</span>
 <input id="sq" placeholder="Type part of a title or author"><button class="go" id="b_lin">Search</button><div id="sres" style="margin-top:14px"></div></div>
 <div class="card"><h3>&#9889; Search by ID (Binary Search)</h3><span class="tag">Bonus &middot; O(log n) on the sorted array</span>
 <input id="bid" type="number" placeholder="Book ID"><button class="go teal" id="b_bin">Find</button><div id="bres" style="margin-top:14px"></div></div></section>

<section id="issue"><div class="card"><h3>&#128228; Issue Book</h3><span class="tag">Only if on the shelf &middot; queue front gets priority</span>
 <input id="iid" type="number" placeholder="Book ID"><input id="imem" placeholder="Member name"><button class="go" id="b_issue">Issue Book</button></div></section>

<section id="reserve"><div class="card"><h3>&#128278; Reserve Book</h3><span class="tag">Enqueue (FIFO) when the book is out</span>
 <input id="vid" type="number" placeholder="Book ID"><input id="vmem" placeholder="Member name"><button class="go" id="b_reserve">Reserve Book</button></div></section>

<section id="return"><div class="card"><h3>&#128229; Return Book</h3><span class="tag">Pushed onto the recently-returned stack</span>
 <input id="rid" type="number" placeholder="Book ID"><button class="go" id="b_return">Return Book</button></div></section>

<section id="queue"><div class="card"><h3>&#128101; Reservation Queue</h3><span class="tag">FIFO &middot; front is served first</span><div id="rq"></div></div></section>

<section id="stack"><div class="card"><h3>&#128218; Recently Returned (Stack)</h3><span class="tag">LIFO &middot; top = reshelve first</span><div id="st"></div>
 <button class="go teal" id="b_reshelve" style="margin-top:8px">Reshelve Top Book (Pop)</button></div></section>

<section id="lab"><div class="two"><div class="card"><h3>&#129518; Infix to Postfix</h3><span class="tag">Stack application</span>
 <input id="ex" value="(3+4)*2^2-6/3"><button class="go" id="b_expr">Convert</button><div id="exres" style="margin-top:12px"></div></div>
 <div class="card"><h3>&#129504; Memory Allocation</h3><span class="tag">First / Best / Worst fit</span>
 <input id="blocks" value="100,500,200,300,600"><input id="procs" value="212,417,112,426">
 <select id="scheme"><option value="first">First fit</option><option value="best">Best fit</option><option value="worst">Worst fit</option></select>
 <button class="go" id="b_alloc">Allocate</button><div id="alres" style="margin-top:12px"></div></div></div></section>
</main></div><div id="toast"></div>

<script>
const $=id=>document.getElementById(id), esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const tabs=[['add','&#10133; Add Book'],['view','&#128214; View All Books'],['search','&#128269; Search Book'],['issue','&#128228; Issue Book'],['reserve','&#128278; Reserve Book'],['return','&#128229; Return Book'],['queue','&#128101; Reservation Queue'],['stack','&#128218; Returned Stack'],['lab','&#129514; DS Lab']];
$('nav').innerHTML=tabs.map(t=>`<button data-t="${t[0]}">${t[1]}</button>`).join('');
$('nav').addEventListener('click',e=>{const b=e.target.closest('button');if(b)show(b.dataset.t)});
function show(t){document.querySelectorAll('main section').forEach(s=>s.classList.toggle('on',s.id==t));document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('on',b.dataset.t==t));if(t!='lab')load()}
function toast(ok,m){const t=$('toast');t.textContent=m;t.style.background=ok?'#12a066':'#e5484d';t.style.display='block';clearTimeout(t.h);t.h=setTimeout(()=>t.style.display='none',4200)}
function banner(on){$('banner').style.display=on?'block':'none';$('banner').innerHTML='&#9888; Cannot reach the Java server. Run <b>java SmartLibrary.java</b> and open <b>http://localhost:8080</b> in your browser.'}
async function api(op,d){try{const r=await fetch('/api/'+op,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(d||{})});const j=await r.json();banner(false);return j}catch(e){banner(true);return {ok:false,msg:'Server not reachable.',books:[],reservations:[],stack:[],log:[],results:[]}}}
async function act(op,d,ids){const r=await api(op,d);toast(r.ok,r.msg);if(r.ok)(ids||[]).forEach(i=>$(i).value='');load()}
const label={available:'On shelf',issued:'Issued',returned:'Awaiting reshelving'};
const row=b=>`<tr><td><b>${b.id}</b></td><td>${esc(b.title)}</td><td>${esc(b.author)}</td><td><span class="pill ${b.status}">${b.status=='issued'?'Issued to '+esc(b.borrower):label[b.status]}</span></td><td>${b.waiting||'-'}</td></tr>`;
async function load(){const s=await api('state');if(!s.books)return;
 $('books').innerHTML=s.books.map(row).join('')||'<tr><td colspan=5 class="mute">No books yet.</td></tr>';
 const out=s.books.filter(b=>b.status=='issued').length,ret=s.books.filter(b=>b.status=='returned').length;
 $('stats').innerHTML=[['Total books',s.books.length],['On shelf',s.books.length-out-ret],['Issued',out],['Reservations',s.reservations.length],['To reshelve',s.stack.length]].map(x=>`<div class="stat"><span>${x[0]}</span><b>${x[1]}</b></div>`).join('');
 $('st').innerHTML=s.stack.map((x,i)=>`<div class="item ${i?'':'first'}">${i?'':'&#11014; TOP &middot; '}#${esc(x.replace('|',' - '))}</div>`).join('')||'<span class="mute">Stack is empty</span>';
 const t=id=>(s.books.find(b=>b.id==id)||{}).title||id;
 $('rq').innerHTML=s.reservations.map((r,i)=>`<div class="item ${i?'':'first'}">${i?(i+1)+'. ':'FRONT &middot; '}${esc(r.member)} - ${esc(t(r.id))} (#${r.id})</div>`).join('')||'<span class="mute">No reservations</span>';
 $('log').innerHTML=s.log.map(l=>`<div>${esc(l)}</div>`).join('')||'<span class="mute">No activity yet</span>'}
$('b_add').onclick=()=>act('add',{id:$('aid').value,title:$('atitle').value,author:$('aauthor').value},['aid','atitle','aauthor']);
$('b_issue').onclick=()=>act('issue',{id:$('iid').value,member:$('imem').value},['iid','imem']);
$('b_reserve').onclick=()=>act('reserve',{id:$('vid').value,member:$('vmem').value},['vid','vmem']);
$('b_return').onclick=()=>act('return',{id:$('rid').value},['rid']);
$('b_reshelve').onclick=()=>act('reshelve',{});
$('b_lin').onclick=async()=>{const r=await api('search',{q:$('sq').value});$('sres').innerHTML=`<p class="mute">${r.results.length} match(es) &middot; ${r.comparisons} comparisons</p><table><tbody>${r.results.map(row).join('')}</tbody></table>`};
$('b_bin').onclick=async()=>{const r=await api('bsearch',{id:$('bid').value});if(r.ok===false){toast(false,r.msg);return}$('bres').innerHTML=r.book?`<p class="mute">Found in ${r.steps} step(s)</p><table><tbody>${row(r.book)}</tbody></table>`:`<p class="mute">Not found (${r.steps} steps)</p>`};
$('b_expr').onclick=async()=>{const r=await api('expr',{e:$('ex').value});$('exres').innerHTML=r.postfix===undefined?`<span style="color:#e5484d">${esc(r.msg)}</span>`:`<p>Postfix: <b>${esc(r.postfix)}</b></p>${r.value!==null?`<p>Value: <b>${r.value}</b></p>`:'<p class="mute">Symbolic operands - no numeric value.</p>'}`};
$('b_alloc').onclick=async()=>{const r=await api('alloc',{blocks:$('blocks').value,procs:$('procs').value,scheme:$('scheme').value});
 if(!r.allocations){$('alres').innerHTML=`<span style="color:#e5484d">${esc(r.msg)}</span>`;return}
 $('alres').innerHTML=r.allocations.map(a=>`<div>Process ${a.size} &rarr; ${a.block<0?'<b style="color:#e5484d">not allocated</b>':'Block '+a.block}</div>`).join('')+'<p class="mute">Remaining:</p>'+r.remaining.map(x=>`<span class="blk">${x}</span>`).join('')};
for(const id of ['sq','bid'])$(id).addEventListener('keydown',e=>{if(e.key=='Enter')$(id=='sq'?'b_lin':'b_bin').click()});
show('view');$('b_expr').click();$('b_alloc').click();
</script></body></html>
""";
}
