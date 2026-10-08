# Fortera Caçambas - Manual de Operação e Lançamento

Site institucional e plataforma de conversão para **FORTERA CAÇAMBAS** (aluguel de caçambas estacionárias de entulho com atendimento nacional).

> **Slogan:** *Sua obra avança. O entulho sai.*  
> **E-mail Comercial:** `forteracacambas@gmail.com`

---

## 1. Visão Geral da Arquitetura

- **Frontend:** React 19 + TypeScript + Tailwind CSS (v4)
- **Renderização e SEO:** Servidor Express Full-Stack com SSR (Server-Side Rendering) e hidratação isomórfica no cliente (`hydrateRoot` / `createRoot`).
- **SEO Técnico:** 
  - Todo o conteúdo textual, títulos `<h1>`, meta descrições específicas, breadcrumbs e dados estruturados Schema.org (`Organization`, `WebPage`, `Article`, `BreadcrumbList`) são entregues no HTML inicial enviado pelo servidor, permitindo indexação direta por rastreadores como o Googlebot.
  - Rotas diretas e recarregamento (F5) funcionam nativamente para todas as páginas e cidades.
  - Rota 404 retorna status HTTP 404 com página útil de recuperação de navegação.

---

## 2. Centralização de Configurações (`src/config/siteConfig.ts`)

Conforme especificado, os dados que ainda não possuem definição oficial foram centralizados com valores vazios:

- `SITE_CONFIG.email`: `forteracacambas@gmail.com` (Ativo)
- `SITE_CONFIG.whatsapp`: `""` (Vazio por padrão)
- `SITE_CONFIG.cnpj`: `""` (Vazio por padrão)
- `SITE_CONFIG.siteUrl`: `process.env.SITE_URL || ""` (Vazio por padrão)

### Configuração para o lançamento público:

Quando você tiver os dados oficiais, edite `src/config/siteConfig.ts` ou defina as variáveis de ambiente:

1. **Domínio Oficial e Canonical (`SITE_URL`):**
   - No arquivo `.env` (ou no painel do servidor), configure:
     ```env
     SITE_URL=https://forteracacambas.com.br
     ```
   - *Comportamento do sistema:* Enquanto `SITE_URL` estiver vazio ou for localhost, o sistema **não** emite tags canônicas incorretas nem URLs locais no `sitemap.xml`. Assim que o domínio oficial é configurado, as tags `<link rel="canonical">` absolutas e o `sitemap.xml` completo passam a ser gerados automaticamente.

2. **WhatsApp Comercial:**
   - Preencha no `siteConfig.ts`:
     ```ts
     whatsapp: '5511999999999', // Apenas números com DDI + DDD
     ```
   - O formulário de orçamento exibirá automaticamente a opção de envio direto para a API do WhatsApp (`wa.me`) com a mensagem formatada. Enquanto estiver vazio, o site oferece o fluxo de e-mail (`mailto:forteracacambas@gmail.com`).

---

## 3. Mapa de Rotas e Páginas

### Páginas Institucionais e Comerciais
- `/` - Página Inicial (Hero, diferenciais, modelos 3/4/5 m³, cidades, guias e formulário de orçamento)
- `/atendimento/` - Atendimento nacional com as 27 Unidades Federativas agrupadas por região (Sudeste, Sul, Centro-Oeste, Nordeste, Norte), links para cidades com orientações práticas e cotação direta sem links quebrados
- `/tamanhos-de-cacamba/` - Capacidades nominais de 3 m³, 4 m³ e 5 m³, esclarecimento de que volume não determina peso e regras de segurança (limite de borda)
- `/preco-aluguel-cacamba/` - Os fatores que determinam o preço do aluguel (sem tabelas inventadas ou falsas promessas)
- `/como-funciona/` - O passo a passo em 5 etapas da contratação à destinação orientada
- `/sobre/` - Apresentação institucional, compromisso com pontualidade e orientação para sua obra
- `/orcamento/` - Formulário interativo de cotação com validação real de campos obrigatórios, resumo do pedido e cópia em 1 clique
- `/privacidade/` - Política de Privacidade aderente à LGPD (sem coleta de CPF, dados recebidos via e-mail tratados para atendimento)

### Guias Práticos
- `/guias/` - Portal de artigos práticos para obras
- `/guias/como-escolher-tamanho-de-cacamba/` - Densidade de materiais, volume vs peso e dimensionamento sob orientação
- `/guias/o-que-pode-colocar-na-cacamba/` - Resíduos aceitos vs proibidos (tintas, orgânico, químicos, baterias)
- `/guias/como-preparar-a-entrega-da-cacamba/` - Vaga na via, manobra do poliguindaste, fiação e condomínios

### Cidades com Orientações Práticas
- `/aluguel-de-cacamba/sp/caraguatatuba/` - Orientações para vias de solo arenoso, maresia e fluxo em alta temporada
- `/aluguel-de-cacamba/sp/campinas/` - Acesso a grandes avenidas e normas de condomínios fechados
- `/aluguel-de-cacamba/pr/curitiba/` - Arborização com fiação, atenção a canaletas de transporte e períodos de chuva
- `/aluguel-de-cacamba/mg/belo-horizonte/` - Topografia com declives, estabilidade na via e ruas estreitas
- `/aluguel-de-cacamba/rj/rio-de-janeiro/` - Janelas de tráfego, vagas em bairros movimentados e regras de condomínio
- `/aluguel-de-cacamba/sp/sao-paulo/` - Zonas com restrição viária, faixas regulamentadas e limite estrito de borda

---

## 4. Instruções para o Google Search Console

Quando publicar o site no domínio final:

1. Acesse o [Google Search Console](https://search.google.com/search-console).
2. Adicione a propriedade com o domínio final (ex: `https://forteracacambas.com.br`).
3. Verifique a propriedade via registro DNS TXT ou meta tag.
4. No menu lateral, acesse **Sitemaps** e envie:
   ```
   https://forteracacambas.com.br/sitemap.xml
   ```
5. O arquivo `robots.txt` já aponta dinamicamente para o sitemap assim que a variável `SITE_URL` for preenchida.

---

## 5. Como Executar Localmente e em Produção

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento Full-Stack com SSR (Porta 3000)
npm run dev

# Verificar tipagem TypeScript
npm run lint

# Build de produção
npm run build

# Iniciar servidor de produção
npm start
```
