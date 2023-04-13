import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://khseuyjbjmxtxlbnrlue.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtoc2V1eWpiam14dHhsYm5ybHVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA3NDE3ODgsImV4cCI6MTk5NjMxNzc4OH0.yfohF0fG2OzJc1dzOohVn9iTnmmsxFAX2gA76D-eFOg";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
