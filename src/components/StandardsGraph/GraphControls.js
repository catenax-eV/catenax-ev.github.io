import React, { useMemo, useState } from 'react';
import styles from './StandardsGraph.module.css';

const CATEGORY_CONFIG = {
  usecase: { label: 'Use Case Standards', color: '#27AE60' },
  component: { label: 'Component Standards', color: '#386FB3' },
};

// Maps the prefix before "/" to a human-readable group name
const TAG_GROUP_LABELS = {
  CAT: 'Category',
  UC: 'Use Case',
};

export default function GraphControls({
  availableCategories = [],
  selectedCategories = [],
  onCategoryFilterChange,
  onSearchChange,
  allVersions = [],
  currentVersion = 'current',
  onVersionChange,
  availableTags = [],
  selectedTags = [],
  onTagFilterChange,
}) {
  const [searchValue, setSearchValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(true);

  // Group tags by their prefix (e.g. "CAT" or "UC")
  const tagGroups = useMemo(() => {
    const groups = {};
    for (const tag of availableTags) {
      const slashIdx = tag.indexOf('/');
      const prefix = slashIdx !== -1 ? tag.slice(0, slashIdx) : 'Other';
      const label = slashIdx !== -1 ? tag.slice(slashIdx + 1) : tag;
      if (!groups[prefix]) groups[prefix] = [];
      groups[prefix].push({ tag, label });
    }
    return groups;
  }, [availableTags]);

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

  const handleVersionChange = e => {
    onVersionChange(e.target.value);
  };

  const handleTagChange = tag => {
    const newSelected = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    onTagFilterChange(newSelected);
  };

  const clearAllFilters = () => {
    setSearchValue('');
    onCategoryFilterChange(['usecase', 'component']);
    onSearchChange('');
    onTagFilterChange([]);
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
          {allVersions.length > 0 && (
            <div className={styles.controlSection}>
              <label className={styles.controlLabel}>Version</label>
              <select
                value={currentVersion ?? 'current'}
                onChange={handleVersionChange}
                className={styles.versionSelect}
              >
                {allVersions.map(v => (
                  <option key={v.name} value={v.name}>
                    {v.label}
                  </option>
                ))}
              </select>
            </div>
          )}

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

          {availableTags.length > 0 && (
            <div className={styles.controlSection}>
              <label className={styles.controlLabel}>
                Tags
                {selectedTags.length > 0 && (
                  <button
                    className={styles.tagClearButton}
                    onClick={() => onTagFilterChange([])}
                  >
                    Clear
                  </button>
                )}
              </label>
              {Object.entries(tagGroups).map(([prefix, items]) => (
                <div key={prefix} className={styles.tagGroup}>
                  <div className={styles.tagGroupLabel}>
                    {TAG_GROUP_LABELS[prefix] ?? prefix}
                  </div>
                  <div className={styles.checkboxGroup}>
                    {items.map(({ tag, label }) => (
                      <label key={tag} className={styles.checkbox}>
                        <input
                          type="checkbox"
                          checked={selectedTags.includes(tag)}
                          onChange={() => handleTagChange(tag)}
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
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
