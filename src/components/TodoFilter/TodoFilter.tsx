import React from 'react';
import { Status } from '../../types/Status';

type Props = {
  handleOption: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  handleText: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleClear: () => void,
  value: Status,
  text: string,
  hasClear: boolean,
};

export const TodoFilter: React.FC<Props> = ({
  handleOption,
  handleText,
  handleClear,
  value,
  text,
  hasClear,
}) => {
  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={value}
            onChange={(event) => handleOption(event)}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          value={text}
          type="text"
          className="input"
          placeholder="Search..."
          onChange={(event) => handleText(event)}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {!hasClear && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={handleClear}
            />
          )}

        </span>
      </p>
    </form>
  );
};
