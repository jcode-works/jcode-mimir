import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  MimirBackground,
} from "@jcode.labs/mimir-ui"
import {
  ArrowRight,
  Bot,
  Building2,
  ChevronDown,
  ClipboardCheck,
  FileSearch,
  GitBranch,
  Globe2,
  HardDrive,
  LockKeyhole,
  Scale,
} from "lucide-react"
import { useEffect, useState } from "react"

interface LandingHeroProps {
  locale: string
  localizedHomeUrl: string
  localizedLibraryUrl: string
  localizedUseCasesUrl: string
  localizedDesktopUrl: string
  alternateLocales: Array<{ locale: string; label: string; href: string }>
  translations: Record<string, string>
}

export function LandingHero({
  alternateLocales,
  locale,
  localizedDesktopUrl,
  localizedHomeUrl,
  localizedLibraryUrl,
  localizedUseCasesUrl,
  translations,
}: LandingHeroProps): React.JSX.Element {
  const t = (key: string): string => translations[key] ?? key
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const proofPoints = [
    {
      icon: LockKeyhole,
      title: t("proof_local_title"),
      text: t("proof_local_text"),
    },
    {
      icon: FileSearch,
      title: t("proof_cited_title"),
      text: t("proof_cited_text"),
    },
    {
      icon: Bot,
      title: t("proof_agent_title"),
      text: t("proof_agent_text"),
    },
  ]

  const useCases = [
    {
      icon: Scale,
      eyebrow: t("use_case_legal_eyebrow"),
      title: t("use_case_legal_title"),
      text: t("use_case_legal_text"),
    },
    {
      icon: ClipboardCheck,
      eyebrow: t("use_case_rfp_eyebrow"),
      title: t("use_case_rfp_title"),
      text: t("use_case_rfp_text"),
    },
    {
      icon: Building2,
      eyebrow: t("use_case_company_eyebrow"),
      title: t("use_case_company_title"),
      text: t("use_case_company_text"),
    },
    {
      icon: FileSearch,
      eyebrow: t("use_case_research_eyebrow"),
      title: t("use_case_research_title"),
      text: t("use_case_research_text"),
    },
  ]

  const faqItems = [
    {
      question: t("faq_private_question"),
      answer: t("faq_private_answer"),
    },
    {
      question: t("faq_formats_question"),
      answer: t("faq_formats_answer"),
    },
    {
      question: t("faq_desktop_question"),
      answer: t("faq_desktop_answer"),
    },
  ]

  const externalLinkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  } as const

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <MimirBackground height="100dvh" className="inset-0 min-h-[110dvh]" behindContent={false} />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-30 h-28 bg-linear-to-b from-background via-background/82 to-transparent"
      />
      <header
        className={`fixed inset-x-0 top-0 z-40 px-4 py-3 transition-all duration-300 md:px-6 ${
          hasScrolled ? "bg-linear-to-b from-background via-background/88 to-transparent" : ""
        }`}
      >
        <nav className="mx-auto flex h-12 max-w-7xl items-center justify-between gap-3 rounded-full border border-border/80 bg-background/58 px-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <a className="font-black text-base text-foreground md:text-lg" href={localizedHomeUrl}>
            Mimir
          </a>

          <div className="hidden items-center gap-6 text-sm font-semibold text-muted-foreground md:flex">
            <a className="transition hover:text-foreground" href={localizedHomeUrl}>
              {t("nav_home")}
            </a>
            <a className="transition hover:text-foreground" href={localizedLibraryUrl}>
              {t("nav_library")}
            </a>
            <a className="transition hover:text-foreground" href={localizedUseCasesUrl}>
              {t("nav_use_cases")}
            </a>
            <a className="transition hover:text-foreground" href={localizedDesktopUrl}>
              {t("nav_desktop")}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher
              alternateLocales={alternateLocales}
              currentLocale={locale}
              label={t("language_label")}
            />

            <Button asChild size="sm" variant="ghost" className="hidden md:inline-flex">
              <a href="https://github.com/jcode-works/jcode-mimir" {...externalLinkProps}>
                <GitBranch aria-hidden="true" data-icon="inline-start" />
                {t("nav_github")}
              </a>
            </Button>
            <Button asChild size="sm">
              <a href="https://github.com/jcode-works/jcode-mimir" {...externalLinkProps}>
                {t("nav_primary")}
                <ArrowRight aria-hidden="true" data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </nav>
      </header>

      <section className="relative z-10 mx-auto flex min-h-[94dvh] w-full max-w-7xl flex-col px-5 pt-24 pb-8 md:px-8 md:pt-28">
        <div className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-5xl">
            <Badge variant="outline" className="mb-6">
              {t("hero_badge")}
            </Badge>
            <h1 className="display-title max-w-5xl font-black text-4xl leading-[0.96] sm:text-5xl lg:text-6xl">
              <span>{t("hero_title_line_1")}</span>
              <span className="block text-foreground/82">{t("hero_title_line_2")}</span>
              <span className="block text-foreground/52">{t("hero_title_line_3")}</span>
            </h1>
            <p className="mt-6 max-w-2xl font-medium text-muted-foreground text-sm leading-6 md:text-base md:leading-7">
              {t("hero_description")}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="https://github.com/jcode-works/jcode-mimir" {...externalLinkProps}>
                  {t("hero_primary_cta")}
                  <ArrowRight aria-hidden="true" data-icon="inline-end" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={localizedUseCasesUrl}>{t("hero_secondary_cta")}</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="relative overflow-hidden shadow-2xl shadow-black/60 backdrop-blur-2xl">
              <CardHeader className="flex-row items-center justify-between border-b border-border">
                <CardTitle className="text-sm font-bold">{t("terminal_label")}</CardTitle>
                <HardDrive aria-hidden="true" className="size-5 text-muted-foreground" />
              </CardHeader>
              <CardContent className="flex flex-col gap-5 font-mono text-xs leading-6 md:text-sm md:leading-7">
                <div>
                  <p className="text-muted-foreground">$ {t("terminal_command_1")}</p>
                  <p className="text-success">{t("terminal_output_1")}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">$ {t("terminal_command_2")}</p>
                  <p className="mt-2 rounded-lg border border-border bg-muted p-3 text-foreground/78">
                    {t("terminal_output_2")}
                    <br />
                    {t("terminal_output_3")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        className="relative z-10 border-y border-border bg-background/80 backdrop-blur-xl"
        id="library"
      >
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-14 md:grid-cols-3 md:px-8 md:py-16">
          {proofPoints.map((point) => (
            <Card key={point.title} className="shadow-xl shadow-black/20">
              <CardHeader>
                <point.icon className="size-5 text-muted-foreground" aria-hidden="true" />
                <CardTitle>{point.title}</CardTitle>
                <CardDescription className="leading-6">{point.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 px-5 py-20 md:grid-cols-2 md:px-8 md:py-24">
        <Card>
          <CardHeader className="gap-5 p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {t("library_eyebrow")}
            </p>
            <CardTitle className="font-black text-2xl leading-tight md:text-3xl">
              {t("library_title")}
            </CardTitle>
            <CardDescription className="text-sm leading-6">{t("library_text")}</CardDescription>
          </CardHeader>
          <CardContent className="font-mono text-xs leading-6 md:text-sm">
            <p className="text-muted-foreground">$ {t("library_install_command")}</p>
            <p>$ {t("library_setup_command")}</p>
            <p>$ {t("library_search_command")}</p>
          </CardContent>
        </Card>
        <Card id="desktop">
          <CardHeader className="gap-5 p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {t("desktop_eyebrow")}
            </p>
            <CardTitle className="font-black text-2xl leading-tight md:text-3xl">
              {t("desktop_title")}
            </CardTitle>
            <CardDescription className="text-sm leading-6">{t("desktop_text")}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline">
              <a href="https://github.com/jcode-works/jcode-mimir" {...externalLinkProps}>
                {t("desktop_cta")}
                <GitBranch aria-hidden="true" data-icon="inline-end" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section
        id="use-cases"
        className="relative z-10 mx-auto max-w-7xl px-5 py-8 pb-20 md:px-8 md:pb-24"
      >
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
            {t("use_cases_eyebrow")}
          </p>
          <h2 className="mt-4 font-black text-2xl leading-tight md:text-3xl">
            {t("use_cases_title")}
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">{t("use_cases_text")}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {useCases.map((useCase) => (
            <Card key={useCase.title}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <useCase.icon className="size-5 text-muted-foreground" aria-hidden="true" />
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    {useCase.eyebrow}
                  </p>
                </div>
                <CardTitle>{useCase.title}</CardTitle>
                <CardDescription className="leading-6">{useCase.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-8 pb-20 md:px-8 md:pb-24">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
            {t("faq_eyebrow")}
          </p>
          <h2 className="mt-4 font-black text-2xl leading-tight md:text-3xl">{t("faq_title")}</h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">{t("faq_text")}</p>
        </div>

        <div className="grid gap-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-lg border border-border bg-card/82 p-5 shadow-xl shadow-black/20 backdrop-blur-xl open:bg-card"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  className="size-4 shrink-0 text-muted-foreground transition group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 pt-4 pb-20 md:px-8 md:pb-24">
        <Card className="overflow-hidden bg-card/88 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl md:p-8">
          <CardHeader className="gap-5 p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {t("closing_eyebrow")}
            </p>
            <CardTitle className="font-black text-2xl leading-tight md:text-3xl">
              {t("closing_title")}
            </CardTitle>
            <CardDescription className="text-sm leading-6">{t("closing_text")}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild className="w-full sm:w-auto">
              <a href="https://github.com/jcode-works/jcode-mimir" {...externalLinkProps}>
                {t("closing_primary_cta")}
                <ArrowRight aria-hidden="true" data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild className="w-full bg-background/55 sm:w-auto" variant="outline">
              <a href={localizedLibraryUrl}>
                {t("closing_secondary_cta")}
                <ArrowRight aria-hidden="true" data-icon="inline-end" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="relative z-10 border-border border-t px-5 py-8 text-center text-xs font-medium text-muted-foreground md:px-8">
        {t("footer_text")}
      </footer>
    </main>
  )
}

function LanguageSwitcher({
  alternateLocales,
  currentLocale,
  label,
}: {
  alternateLocales: Array<{ locale: string; label: string; href: string }>
  currentLocale: string
  label: string
}): React.JSX.Element {
  const currentLabel =
    alternateLocales.find((entry) => entry.locale === currentLocale)?.label ?? currentLocale

  function handleLocaleClick(
    locale: string,
    href: string,
    event: React.MouseEvent<HTMLAnchorElement>,
  ) {
    try {
      window.localStorage.setItem("mimir-locale", locale)
      window.localStorage.setItem("i18nextLng", locale)
    } catch {
      // Navigation still applies the selected locale when storage is blocked.
    }

    const suffix = `${window.location.search}${window.location.hash}`
    if (!suffix) return

    event.preventDefault()
    const url = new URL(href, window.location.origin)
    url.search = window.location.search
    url.hash = window.location.hash
    window.location.href = url.toString()
  }

  return (
    <details className="group relative">
      <summary className="flex h-10 cursor-pointer list-none items-center gap-2 rounded-full border border-border bg-background/60 px-3 text-xs font-bold text-foreground outline-none backdrop-blur transition hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring">
        <Globe2 aria-hidden="true" className="size-4 text-muted-foreground" />
        <span className="sr-only">{label}</span>
        <span className="hidden sm:inline">{currentLabel}</span>
        <span className="uppercase sm:hidden">{currentLocale}</span>
        <ChevronDown
          aria-hidden="true"
          className="size-3.5 text-muted-foreground transition group-open:rotate-180"
        />
      </summary>
      <div className="absolute right-0 mt-2 grid min-w-36 gap-1 rounded-lg border border-border bg-card p-1.5 shadow-2xl shadow-black/50">
        {alternateLocales.map((entry) => (
          <a
            aria-current={entry.locale === currentLocale ? "page" : undefined}
            className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-muted hover:text-foreground aria-[current=page]:bg-muted aria-[current=page]:text-foreground"
            href={entry.href}
            key={entry.locale}
            onClick={(event) => handleLocaleClick(entry.locale, entry.href, event)}
          >
            {entry.label}
          </a>
        ))}
      </div>
    </details>
  )
}
