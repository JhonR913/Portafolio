export default function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-logo">JR</div>
        <ul className="navbar-menu">
          <li><a href="#perfil">Perfil</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#tecnologias">Tech</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      {/* PORTADA */}
      <section className="portada">
        <div className="portada-contenido">
          <h1>Jhon Ramirez</h1>
          <p className="portada-subtitle">Full Stack Developer &amp; AI Specialist</p>
          <p className="portada-desc">
            Especialista en visión por computadora, machine learning e inteligencia artificial.
            Creo soluciones tecnológicas innovadoras que combinan backend robusto, frontend moderno y IA avanzada.
          </p>
          <div className="cta-buttons">
            <a href="#proyectos" className="btn btn-primary">Ver Mis Proyectos</a>
            <a href="#contacto" className="btn btn-secondary">Contáctame</a>
          </div>
        </div>
        <div className="scroll-indicator">↓</div>
      </section>

      {/* PERFIL */}
      <section className="seccion seccion-light" id="perfil">
        <h2 className="seccion-titulo">Perfil Profesional</h2>
        <div className="perfil-grid">
          <div className="perfil-texto">
            <h3>Desarrollador Innovador</h3>
            <p>
              Ingeniero de sistemas apasionado por transformar ideas complejas en soluciones tecnológicas elegantes y funcionales.
              Mi especialidad es combinar visión por computadora, machine learning e inteligencia artificial con desarrollo full stack.
            </p>
            <p>
              Con experiencia en <strong>Python, TypeScript y Flask</strong>, domino tecnologías como{' '}
              <strong>YOLOv11, OpenCV</strong> y arquitecturas escalables. Me encanta resolver problemas reales usando IA
              y crear experiencias de usuario excepcionales.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>
              "Creo que la tecnología debe ser accesible, eficiente y hacer una diferencia real en el mundo."
            </p>
            <div className="perfil-highlight">
              <strong style={{ color: 'var(--color-accent)' }}>💡 Mi Compromiso:</strong> Código limpio, soluciones
              escalables y resultados medibles que transforman tu visión en realidad.
            </div>
          </div>
          <div className="perfil-stats">
            {[
              { numero: '4+', label: 'Años de Experiencia' },
              { numero: '15+', label: 'Proyectos Completados' },
              { numero: '100%', label: 'Satisfacción' },
              { numero: '∞', label: 'Disponibilidad' },
            ].map((s) => (
              <div className="stat-box" key={s.label}>
                <div className="stat-numero">{s.numero}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="seccion seccion-dark" id="servicios">
        <h2 className="seccion-titulo">Servicios Principales</h2>
        <div className="servicios-grid">
          {[
            { icon: '🤖', title: 'Visión por Computadora', desc: 'Detección de objetos, análisis de imágenes y video en tiempo real con YOLOv11. Soluciones que ven y comprenden el mundo visual.' },
            { icon: '⚡', title: 'Aplicaciones Full Stack', desc: 'Desarrollo completo de aplicaciones web modernas. Backend robusto con APIs escalables y frontend responsivo e intuitivo.' },
            { icon: '🧠', title: 'Machine Learning & IA', desc: 'Modelos predictivos, clasificación, reconocimiento y análisis inteligente. Automatización mediante inteligencia artificial.' },
            { icon: '🎬', title: 'Procesamiento de Video', desc: 'Análisis de video en tiempo real, seguimiento de objetos y eventos. Detección automática de patrones complejos.' },
            { icon: '🔧', title: 'Backend & APIs', desc: 'Servidores escalables, bases de datos optimizadas y APIs RESTful seguras. Arquitectura para aplicaciones de alto rendimiento.' },
            { icon: '🚀', title: 'DevOps & Deployment', desc: 'Despliegue en la nube, containerización y automatización. CI/CD para entrega continua y confiable.' },
          ].map((s) => (
            <div className="servicio-card" key={s.title}>
              <div className="servicio-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="seccion seccion-light">
        <h2 className="seccion-titulo">Metodología de Trabajo</h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05em', maxWidth: 800, marginBottom: 40 }}>
          Trabajo con metodologías ágiles garantizando iteración constante, comunicación transparente y entrega de valor continuo.
        </p>
        <div className="metodologia-grid">
          {[
            { n: 1, title: 'Análisis', desc: 'Entendimiento profundo de tus objetivos, restricciones y requisitos específicos.' },
            { n: 2, title: 'Diseño', desc: 'Arquitectura clara, escalable y optimizada para tu caso de uso específico.' },
            { n: 3, title: 'Desarrollo', desc: 'Código limpio, testing continuo y buenas prácticas en cada etapa.' },
            { n: 4, title: 'Validación', desc: 'Testing exhaustivo, QA riguroso y ajustes basados en feedback.' },
            { n: 5, title: 'Despliegue', desc: 'Lanzamiento sin problemas en producción con monitoreo continuo.' },
            { n: 6, title: 'Soporte', desc: 'Mantenimiento activo, optimizaciones y soporte post-lanzamiento.' },
          ].map((s) => (
            <div className="metodologia-step" key={s.n}>
              <div className="step-number">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="seccion seccion-dark" id="proyectos">
        <h2 className="seccion-titulo">Proyectos Destacados</h2>
        <div className="proyectos-grid">
          {[
            {
              icon: '🚨', title: 'Accident Detector',
              desc: <><strong>Sistema inteligente de detección de accidentes en tiempo real.</strong> Utiliza visión por computadora avanzada para identificar automáticamente colisiones y eventos críticos de tráfico.</>,
              sub: 'Detección de eventos con 95%+ de precisión. Procesamiento de video en vivo.',
              tags: ['Python', 'YOLOv11', 'OpenCV', 'Flask', 'Computer Vision'],
            },
            {
              icon: '🏗️', title: 'App Arquitectura',
              desc: <><strong>Aplicación web full stack moderna y escalable.</strong> Frontend responsivo con arquitectura limpia y backend eficiente. Desplegada en producción con Vercel.</>,
              sub: 'Performance optimizado. Diseño responsive. Mejores prácticas implementadas.',
              tags: ['TypeScript', 'React', 'Vercel', 'Full Stack', 'Responsive'],
            },
            {
              icon: '📚', title: 'Proyectos de Innovación',
              desc: <><strong>Laboratorio activo de experimentación y desarrollo.</strong> Prototipos innovadores, pruebas de concepto y soluciones experimentales en Python, APIs y desarrollo frontend.</>,
              sub: 'Aprendizaje continuo. Innovación constante. Mejora técnica permanente.',
              tags: ['Python', 'JavaScript', 'Flask', 'APIs', 'Testing'],
            },
          ].map((p) => (
            <div className="proyecto-card" key={p.title}>
              <div className="proyecto-header">
                <h3>{p.icon} {p.title}</h3>
              </div>
              <div className="proyecto-contenido">
                <p>{p.desc}</p>
                <p style={{ fontSize: '0.9em', color: 'rgba(255,255,255,0.7)' }}>{p.sub}</p>
                <div className="proyecto-tech">
                  {p.tags.map((t) => <span className="tech-badge" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECNOLOGÍAS */}
      <section className="seccion seccion-light" id="tecnologias">
        <h2 className="seccion-titulo">Stack Tecnológico</h2>
        <div style={{ marginTop: 50 }}>
          <div className="tech-categories">
            {[
              { cat: 'Lenguajes Principales', items: ['Python', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
              { cat: 'IA & Visión', items: ['YOLOv11', 'OpenCV', 'TensorFlow', 'PyTorch', 'Scikit-learn'] },
              { cat: 'Backend & Frameworks', items: ['Flask', 'Python', 'REST APIs', 'Node.js', 'Express'] },
              { cat: 'Frontend & UI', items: ['React', 'Responsive Design', 'Tailwind CSS', 'Material UI', 'Web APIs'] },
              { cat: 'Bases de Datos & Cloud', items: ['PostgreSQL', 'MongoDB', 'Firebase', 'Vercel', 'AWS'] },
              { cat: 'Herramientas & DevOps', items: ['Git/GitHub', 'Docker', 'Linux', 'VS Code', 'CI/CD'] },
            ].map((g) => (
              <div className="tech-category" key={g.cat}>
                <h3>{g.cat}</h3>
                <div className="tech-list">
                  {g.items.map((i) => <span className="tech-item" key={i}>{i}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPUESTA DE VALOR */}
      <section className="seccion seccion-dark">
        <h2 className="seccion-titulo">Por Qué Trabajar Conmigo</h2>
        <div className="propuesta-grid">
          {[
            { title: '✓ Especialista en IA', desc: 'Experiencia profunda en machine learning, visión por computadora y soluciones inteligentes de punta.' },
            { title: '✓ Full Stack Completo', desc: 'De backend robusto a frontend moderno. Soluciones end-to-end sin dependencias de terceros.' },
            { title: '✓ Código de Calidad', desc: 'Arquitectura limpia, patrones de diseño, testing y documentación. Código mantenible y escalable.' },
            { title: '✓ Resultados Medibles', desc: 'Enfoque orientado a objetivos con métricas claras. Entrega que impacta tu negocio.' },
            { title: '✓ Comunicación Clara', desc: 'Transparencia total. Reportes regulares. Reuniones sincronizadas. Cero sorpresas.' },
            { title: '✓ Soporte Continuo', desc: 'Más allá del lanzamiento. Mantenimiento, optimizaciones y apoyo técnico disponible.' },
          ].map((v) => (
            <div className="valor-item" key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section className="seccion seccion-light" id="contacto">
        <h2 className="seccion-titulo">Conectemos</h2>
        <div className="contacto-contenido">
          <p className="contacto-desc">
            ¿Tienes un proyecto interesante? ¿Necesitas ayuda con visión por computadora, IA o desarrollo full stack?
            <br />Estoy disponible para conversaciones sobre cómo puedo contribuir a tu visión.
          </p>
          <div className="contacto-grid">
            <div className="contacto-item">
              <div className="contacto-label">📧 Email</div>
              <div className="contacto-valor">
                <a href="mailto:contacto@jhon.dev">contacto@jhon.dev</a>
              </div>
            </div>
            <div className="contacto-item">
              <div className="contacto-label">💼 GitHub</div>
              <div className="contacto-valor">
                <a href="https://github.com/JhonR913" target="_blank" rel="noreferrer">@JhonR913</a>
              </div>
            </div>
            <div className="contacto-item">
              <div className="contacto-label">🌍 Ubicación</div>
              <div className="contacto-valor">Colombia 🇨🇴</div>
            </div>
          </div>
          <div className="redes-sociales">
            <a href="https://github.com/JhonR913" className="red-btn" title="GitHub" target="_blank" rel="noreferrer">⚙</a>
            <a href="https://linkedin.com" className="red-btn" title="LinkedIn" target="_blank" rel="noreferrer">in</a>
            <a href="mailto:contacto@jhon.dev" className="red-btn" title="Email">✉</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p><span className="footer-highlight">© 2025 Jhon Ramirez</span> - Desarrollador Full Stack &amp; Especialista en IA</p>
        <p>Construido con <span className="footer-highlight">Passion</span> • Computer Vision • Machine Learning • Full Stack Development</p>
        <p style={{ marginTop: 15, opacity: 0.6, fontSize: '0.85em' }}>Disponible para proyectos remotos e internacionales</p>
      </footer>
    </>
  )
}
