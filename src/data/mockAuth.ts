import type {
  User,
  LoginCredentials,
  RegisterCredentials,
} from "../types/user";

// Mock user database stored in localStorage
const USERS_KEY = "flowdesk_users";
const SESSION_KEY = "flowdesk_session";

// Seed one default user so you can log in immediately
const DEFAULT_USER: User = {
  id: "1",
  name: "Priya Nair",
  email: "priya@flowdesk.io",
  avatar: "PN",
  role: "admin",
  createdAt: new Date().toISOString(),
};

// ── Helpers ────────────────────────────────────────────────

function getUsers(): Record<string, { user: User; password: string }> {
  const raw = localStorage.getItem(USERS_KEY);
  if (!raw) {
    // seed the default user on first run
    const seed = {
      [DEFAULT_USER.email]: { user: DEFAULT_USER, password: "password123" },
    };
    localStorage.setItem(USERS_KEY, JSON.stringify(seed));
    return seed;
  }
  return JSON.parse(raw);
}

function saveUsers(users: Record<string, { user: User; password: string }>) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Simulate network delay so loading states are visible
function delay(ms = 800) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ── Auth actions ───────────────────────────────────────────

export async function mockLogin(credentials: LoginCredentials): Promise<User> {
  await delay();
  const users = getUsers();
  const record = users[credentials.email];

  if (!record || record.password !== credentials.password) {
    throw new Error("Invalid email or password");
  }

  // Save session
  localStorage.setItem(SESSION_KEY, JSON.stringify(record.user));
  return record.user;
}

export async function mockRegister(
  credentials: RegisterCredentials,
): Promise<User> {
  await delay();
  const users = getUsers();

  if (users[credentials.email]) {
    throw new Error("An account with this email already exists");
  }

  const newUser: User = {
    id: crypto.randomUUID(), // Generate a unique ID for the new user
    name: credentials.name,
    email: credentials.email,
    avatar: credentials.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2),
    role: "agent",
    createdAt: new Date().toISOString(),
  };

  users[credentials.email] = { user: newUser, password: credentials.password };
  saveUsers(users);

  localStorage.setItem(SESSION_KEY, JSON.stringify(newUser));
  return newUser;
}

export function mockLogout() {
  localStorage.removeItem(SESSION_KEY);
}

export function getSession(): User | null {
  const raw = localStorage.getItem(SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
}
