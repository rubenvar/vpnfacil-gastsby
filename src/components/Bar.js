import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IconLayoutGrid, IconLayoutList } from '@tabler/icons';

import { ViewContext } from '../context/ViewContext';
import Sort from './Sort';
import StyledBar from './styles/BarStyles';
import { useWindowSize } from '../utils';

export default function Bar({ total }) {
  const { table, toggleTable, forceBlockView } = useContext(ViewContext);
  const { width } = useWindowSize();
  console.log(width);

  useEffect(() => {
    if (width < 767) forceBlockView();
  }, [width, forceBlockView]);

  return (
    <StyledBar id="vpnBar">
      <div className="container">
        <div id="general-info">
          <p>Estás viendo {total} VPNs</p>
          <div className="buttons">
            <button
              type="button"
              disabled={table}
              onClick={toggleTable}
              title="Cambiar a Tabla"
            >
              <IconLayoutList color={table ? '#4447' : '#444'} />
            </button>
            <button
              type="button"
              disabled={!table}
              onClick={toggleTable}
              title="Cambiar a Bloques"
            >
              <IconLayoutGrid color={table ? '#444' : '#4447'} />
            </button>
          </div>
        </div>
        <Sort />
        {/* <Filter /> */}
      </div>
    </StyledBar>
  );
}

Bar.propTypes = {
  total: PropTypes.number,
};
