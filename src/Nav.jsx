import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Nav = () => {
  const { t, i18n } = useTranslation();
  
  const [, setCurrentLanguage] = useState(i18n.language); 
  
  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  const todos = useSelector((state) => state.todos.todos);
  const totalTodos = todos.length;
  const totalToDo = todos.filter((todo) => todo.status === "To do").length;
  const totalInProgress = todos.filter(
    (todo) => todo.status === "In Progress"
  ).length;
  const totalCompleted = todos.filter(
    (todo) => todo.status === "Completed"
  ).length;

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); 
  };

  return (
    <div className="flex gap-2 p-2 bg-white rounded font-medium text-sm lg:flex lg:justify-between">
      <Link to="/">{t('All Tasks')}: {totalTodos}</Link>
      <Link to="/todo">{t('To do')}: {totalToDo}</Link>
      <Link to="/in-progress">{t('In Progress')}: {totalInProgress}</Link>
      <Link to="/completed">{t('Completed')}: {totalCompleted}</Link>
      <Link to="/add-todo">{t('+ New Task')}</Link>
      <button onClick={() => changeLanguage('en')} className="ml-2 px-3">
        EN
      </button>
      <button onClick={() => changeLanguage('fr')} className="ml-2 px-3">
        FR
      </button>
    </div>
  );
};

export default Nav;
