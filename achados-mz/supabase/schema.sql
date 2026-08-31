-- Schema completo do Achados MZ
-- Execute este script no SQL Editor do Supabase

-- Extensoes
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Tipos
CREATE TYPE document_type AS ENUM ('BI', 'CARTA_CONDUCAO', 'PASSAPORTE');
CREATE TYPE document_status AS ENUM ('PENDENTE', 'APROVADO', 'ENCONTRADO', 'DEVOLVIDO', 'REJEITADO', 'REMOVIDO');
CREATE TYPE listing_type AS ENUM ('PERDIDO', 'ACHADO');

-- Tabela de perfis
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT,
    phone TEXT,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela de documentos
CREATE TABLE IF NOT EXISTS documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    listing_type listing_type NOT NULL,
    document_type document_type NOT NULL,
    document_number TEXT,
    full_name TEXT NOT NULL,
    province TEXT NOT NULL,
    location_details TEXT,
    lost_date DATE,
    contact_phone TEXT,
    contact_email TEXT,
    status document_status DEFAULT 'PENDENTE',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    approved_at TIMESTAMPTZ,
    approved_by UUID REFERENCES profiles(id)
);

-- Indices
CREATE INDEX IF NOT EXISTS idx_documents_status ON documents(status);
CREATE INDEX IF NOT EXISTS idx_documents_type ON documents(document_type);
CREATE INDEX IF NOT EXISTS idx_documents_province ON documents(province);
CREATE INDEX IF NOT EXISTS idx_documents_name ON documents USING gin(full_name gin_trgm_ops);

-- Tabela de contactos
CREATE TABLE IF NOT EXISTS contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    document_id UUID REFERENCES documents(id) ON DELETE CASCADE,
    contact_name TEXT,
    contact_phone TEXT,
    message TEXT,
    status TEXT DEFAULT 'PENDENTE',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela de denuncias
CREATE TABLE IF NOT EXISTS reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    document_id UUID REFERENCES documents(id) ON DELETE CASCADE,
    reporter_name TEXT,
    reason TEXT NOT NULL,
    details TEXT,
    status TEXT DEFAULT 'PENDENTE',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;

-- Politicas de documentos
CREATE POLICY "Documentos aprovados sao visiveis" ON documents
    FOR SELECT USING (status = 'APROVADO');

CREATE POLICY "Qualquer pessoa pode criar documentos" ON documents
    FOR INSERT WITH CHECK (true);

-- Politicas de perfis
CREATE POLICY "Perfis sao visiveis" ON profiles
    FOR SELECT USING (true);

-- Politicas de contactos
CREATE POLICY "Contatos sao visiveis para admin" ON contacts
    FOR SELECT USING (EXISTS (
        SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = true
    ));

CREATE POLICY "Qualquer pessoa pode criar contatos" ON contacts
    FOR INSERT WITH CHECK (true);

-- Politicas de denuncias
CREATE POLICY "Qualquer pessoa pode criar denuncias" ON reports
    FOR INSERT WITH CHECK (true);

-- Funcao para atualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_documents_updated_at
    BEFORE UPDATE ON documents
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
