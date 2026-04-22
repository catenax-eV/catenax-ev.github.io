import React, { useState } from 'react';
import styles from './StandardsGraph.module.css';

const CATEGORY_CONFIG = {
  usecase: { label: 'Use Case Standards', color: '#27AE60' },
  component: { label: 'Component Standards', color: '#386FB3' },
};

export default function GraphControls({
  availableCategories = [],
  selectedCategories = [],
  onCategoryFilterChange,
  onSearchChange,
}) {
  const [searchValue, setSearchValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(true);

  const handleCategoryChange = category => {
    const newSelected = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    onCategoryFilterChange(newSelected);
  };

  const handleSearchChange = e => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange(value);
  };

  const clearAllFilters = () => {
    setSearchValue('');
    onCategoryFilterChange(['usecase', 'component']);
    onSearchChange('');
  };

  return (
    <div className={styles.controlPanel}>
      <div className={styles.panelHeader}>
        <div className={styles.panelTitle}>
          <h2>Standards Graph</h2>
          <p>Dependencies between Catena-X Standards</p>
        </div>
        <button
          className={styles.toggleButton}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label="Toggle filters"
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>

      {isExpanded && (
        <div className={styles.controlsContent}>
          <div className={styles.controlSection}>
            <label className={styles.controlLabel}>Search</label>
            <input
              type="text"
              placeholder="Title or CX number..."
              value={searchValue}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
          </div>

          {availableCategories.length > 0 && (
            <div className={styles.controlSection}>
              <label className={styles.controlLabel}>Categories</label>
              <div className={styles.checkboxGroup}>
                {availableCategories.map(category => {
                  const config = CATEGORY_CONFIG[category] || { label: category, color: '#666' };
                  return (
                    <label key={category} className={styles.checkbox}>
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                      />
                      <span className={styles.legendDot} style={{ background: config.color }} />
                      <span>{config.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          <button onClick={clearAllFilters} className={styles.clearButton}>
            Reset Filters
          </button>

          <div className={styles.legend}>
            <h4>Legend</h4>
            <div className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: '#27AE60' }} />
              <span>Use Case Standards (UC/)</span>
            </div>
            <div className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: '#386FB3' }} />
              <span>Component Standards (CAT/)</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
