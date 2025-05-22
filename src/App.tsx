import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { TabsLayout } from './components/TabsLayout';
import { TabContent } from './components/TabContent';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `navbar-item ${isActive ? 'is-active' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) =>
              `navbar-item ${isActive ? 'is-active' : ''}`
            }
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/tabs" element={<TabsLayout />}>
            <Route index element={<div>Please select a tab</div>} />
            <Route path="tab-1" element={<TabContent text="Some text 1" />} />
            <Route path="tab-2" element={<TabContent text="Some text 2" />} />
            <Route path="tab-3" element={<TabContent text="Some text 3" />} />
            <Route path="*" element={<div>Please select a tab</div>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </>
);
