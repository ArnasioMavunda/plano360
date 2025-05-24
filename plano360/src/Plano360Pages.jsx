import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Página de Login
export const Login = () => {
  return (
    <main>
      <div className="login-container">
        <h2>Entrar na Conta</h2>
        <div className="line"></div>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="login-btn">Entrar</button>
        </form>
        <div className="login-links">
          <p><a href="#">Esqueceu a senha?</a></p>
          <p>Não tem conta? <a href="#">Crie uma agora</a></p>
        </div>
      </div>
    </main>
  );
};

// Página de Adicionar Tarefa
export const AddTask = ({ onAddTask }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    subject: '',
    dueDate: '',
    priority: 'medium',
    status: 'pending'
  });

  const handleChange = (e) => {
    const { id, value, name } = e.target;
    setFormData({
      ...formData,
      [id || name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(formData);
    navigate('/tasks');
  };

  return (
    <main>
      <div className="task-container">
        <h2>Nova Tarefa</h2>
        <div className="line"></div>
        <form className="task-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Título da Tarefa</label>
            <input type="text" id="title" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <textarea id="description" onChange={handleChange}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Matéria</label>
            <select id="subject" required onChange={handleChange}>
              <option value="">Selecione a matéria</option>
              <option value="Matemática">Matemática</option>
              <option value="Português">TLP</option>
              <option value="História">SEAC</option>
              <option value="Física">Física</option>
              <option value="Biologia">TREI</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="dueDate">Data de Conclusão</label>
            <input type="date" id="dueDate" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Prioridade</label>
            <div className="priority-levels">
              {['low', 'medium', 'high'].map((level) => (
                <div className="priority-option" key={level}>
                  <input
                    type="radio"
                    id={level}
                    name="priority"
                    value={level}
                    checked={formData.priority === level}
                    onChange={handleChange}
                  />
                  <label htmlFor={level}>{level[0].toUpperCase() + level.slice(1)}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select id="status" required onChange={handleChange}>
              <option value="pending">Pendente</option>
              <option value="in-progress">Em Progresso</option>
              <option value="completed">Concluído</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">Adicionar Tarefa</button>
        </form>
      </div>
    </main>
  );
};

// Página de Visualizar Tarefas
export const TaskList = ({ tasks, onDelete }) => {
  return (
    <main>
      <div className="tasks-container">
        <div className="tasks-header">
          <h2>Minhas Tarefas</h2>
          <a href="/add-task" className="add-task-btn">+ Adicionar Tarefa</a>
        </div>
        <div className="tasks-grid">
          {tasks.length === 0 && <p>Nenhuma tarefa adicionada ainda.</p>}
          {tasks.map((task, index) => (
            <div className={`task-card ${task.priority}`} key={index}>
              <div className="task-title">{task.title}</div>
              <div className="task-meta">
                <span>{task.subject}</span>
                <span>Prazo: {task.dueDate}</span>
              </div>
              <div className="task-description">{task.description}</div>
              <div>
                <span className={`task-status status-${task.status}`}>{task.status}</span>
              </div>
              <div className="task-actions">
                <button className="task-btn delete-btn" onClick={() => onDelete(index)}>Excluir</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
