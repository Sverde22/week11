import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL= 'https://ltpzegtftlbobkisvarr.supabase.co';
const SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0cHplZ3RmdGxib2JraXN2YXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMTA1ODUsImV4cCI6MjA0OTY4NjU4NX0.SCPo6NiUpZy8oHbF6g2BRzZjdR-lTAMwfOFCX0VuKdE';

export const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY,
);