import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './Css10.css';
import estudanteImg from './assets/estudante.png.png';
import focoImg from './assets/foco.jpg.jpg';
import tarefasImg from './assets/tarefas.png.png';
import pomodoroImg from './assets/pomodo.png.png';
import painelImg from './assets/painel.jpg.jpg';
import user1Img from './assets/user1.jpg.jpg';
import user2Img from './assets/user2.jng.png';
import user3Img from './assets/user3.jpg.jpg';
import { Login, AddTask, TaskList } from './Plano360Pages';

const Header = () => (
  <header>
    <div className="container header-content">
      <Link to="/" className="no-underline"><h1>Plano360</h1></Link>
      <p className="tagline">Toma o controlo dos teus estudos com visão total</p>
      <div className="header-buttons">
        <Link to="/login" className="btn login no-underline">Entrar</Link>
        <Link to="/add-task" className="btn signup no-underline">Adiconar Tarefas</Link>
        <Link to="/tasks" className="btn cta no-underline">Ver Tarefas</Link>
      </div>
    </div>
  </header>
);

const Home = () => (
  <>
    <section className="hero">
      <img src={estudanteImg} alt="Estudante com planner" className="hero-img" />
      <h2>Organiza tarefas, provas e metas num só lugar</h2>
      <p>Plano360 é o teu centro de foco</p>
      <Link to="/add-task" className="btn cta no-underline">Começar Agora (Grátis)</Link>
    </section>

    <section className="image-before-about">
      <img src={focoImg} alt="Imagem foco" className="full-width-img" />
    </section>

    <section className="about">
      <h2>Sobre Nós</h2>
      <div className="line"></div>
      <p>
        Somos uma equipe focada em ajudar estudantes a alcançarem seus objetivos com organização, disciplina e foco.
      </p>
    </section>

    <section className="features">
      <h2>Serviços</h2>
      <div className="line"></div>
      <div className="cards">
        <div className="card">
          <img src={tarefasImg} className="circle-img" alt="Planeamento de Tarefas" />
          <h3>Planeamento de Tarefas</h3>
          <p>Organiza atividades com facilidade e visão clara.</p>
        </div>
        <div className="card">
          <img src={pomodoroImg} className="circle-img" alt="Técnica Pomodoro" />
          <h3>Técnica Pomodoro</h3>
          <p>Maximiza a produtividade com foco controlado.</p>
        </div>
        <div className="card">
          <img src={painelImg} className="circle-img" alt="Painel Visual" />
          <h3>Painel Visual</h3>
          <p>Interface limpa, intuitiva e motivadora.</p>
        </div>
      </div>
    </section>

    <section className="dashboard">
      <h2>Teu Painel</h2>
      <div className="line"></div>
      <div className="dashboard-box">
        <div>
          <h3>Tarefas Pendentes:</h3>
          <ul>
            <li>Estudar matemática</li>
            <li>Fazer resumo de biologia</li>
          </ul>
        </div>
        <div>
          <h3>Tarefas Concluídas:</h3>
          <ul>
            <li>Ler capítulo de História</li>
            <li>Elaborar uma redacçaõ</li>
          </ul>
        </div>
        <div>
          <h3>Metas da Semana:</h3>
          <p>Terminar 1 livro e revisar 2 matérias.</p>
        </div>
        <div>
          <h3>Mensagens Motivacionais:</h3>
          <p>"Hey, você é capaz de coisas incriveís!."</p>
        </div>
        <div>
          <h3>Melhores Notas:</h3>
          <p>Português - 18/20 </p>
          <p>Física - 17/20</p>
        </div>
        <div>
          <h3>Piores Notas:</h3>
          <p>Português - 10/09 </p>
          <p>Matemática - 11/12</p>
        </div>
      </div>
    </section>

    <section className="testimonials">
      <h2>Depoimentos</h2>
      <div className="line"></div>
      <div className="testimonial">
        <img src={user1Img} className="user-img" alt="Usuário 1" />
        <p>"O Plano360 mudou a forma como eu estudo!"</p>
        <div className="stars">★★★★★</div>
      </div>
      <div className="testimonial">
        <img src={user2Img} className="user-img" alt="Usuário 2" />
        <p>"Agora consigo cumprir todas as minhas metas."</p>
        <div className="stars">★★★★☆</div>
      </div>
      <div className="testimonial">
        <img src={user3Img} className="user-img" alt="Usuário 3" />
        <p>"Simplesmente perfeito para o meu dia a dia."</p>
        <div className="stars">★★★★★</div>
      </div>
    </section>
  </>
);

const Footer = () => (
  <footer>
    <p>&copy; 2025 Plano360. Todos os direitos reservados.</p>
  </footer>
);

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('plano360_tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const handleAddTask = (task) => {
    const updated = [...tasks, task];
    setTasks(updated);
    localStorage.setItem('plano360_tasks', JSON.stringify(updated));
  };

  const handleDeleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
    localStorage.setItem('plano360_tasks', JSON.stringify(updated));
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-task" element={<AddTask onAddTask={handleAddTask} />} />
        <Route path="/tasks" element={<TaskList tasks={tasks} onDelete={handleDeleteTask} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
