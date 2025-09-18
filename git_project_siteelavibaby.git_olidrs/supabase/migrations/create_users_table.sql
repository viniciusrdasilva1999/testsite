/*
  # Create users table and RLS policies

  1. New Tables
    - `users`
      - `id` (uuid, primary key, defaults to auth.uid())
      - `email` (text, unique, not null)
      - `role` (text, defaults to 'user')
      - `name` (text, defaults to '')
      - `cpf` (text, unique, nullable)
      - `telefone` (text, nullable)
      - `endereco` (jsonb, nullable)
      - `aceitaNewsletter` (boolean, defaults to false)
      - `created_at` (timestamp, defaults to now())
  2. Security
    - Enable RLS on `users` table
    - Add policy for authenticated users to read their own data
    - Add policy for authenticated users to insert their own data
    - Add policy for authenticated users to update their own data
*/

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT auth.uid(),
  email text UNIQUE NOT NULL,
  role text DEFAULT 'user' NOT NULL,
  name text DEFAULT '' NOT NULL,
  cpf text UNIQUE,
  telefone text,
  endereco jsonb,
  aceitaNewsletter boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Policy for authenticated users to read their own data
CREATE POLICY "Authenticated users can read their own user data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Policy for authenticated users to insert their own data
CREATE POLICY "Authenticated users can insert their own user data"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Policy for authenticated users to update their own data
CREATE POLICY "Authenticated users can update their own user data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);