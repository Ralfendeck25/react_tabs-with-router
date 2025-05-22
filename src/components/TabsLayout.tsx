import { NavLink, Outlet, useLocation } from 'react-router-dom';

export const TabsLayout = () => {
  const location = useLocation();

  const tabs = [
    { id: 'tab-1', title: 'Tab 1' },
    { id: 'tab-2', title: 'Tab 2' },
    { id: 'tab-3', title: 'Tab 3' },
  ];

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = location.pathname.endsWith(tab.id);

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={isActive ? 'is-active' : ''}
              >
                <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        <Outlet />
      </div>
    </>
  );
};
