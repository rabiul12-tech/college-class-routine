// app/page.js
"use client";

import React, { useState, useEffect } from "react";
import { rootWordsData } from "../../data/adverb";

// Grouped by type for easier filtering
const rootWordsByType = {
  prefix: rootWordsData.filter((item) => item.type === "prefix"),
  suffix: rootWordsData.filter((item) => item.type === "suffix"),
  root: rootWordsData.filter((item) => item.type === "root"),
};

export default function RootWordsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePages, setVisiblePages] = useState([]);
  const itemsPerPage = 10;

  // Filter data based on search term and selected type
  const filteredData = rootWordsData.filter((item) => {
    const matchesSearch =
      item.wordPart.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.examples.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = selectedType === "all" || item.type === selectedType;

    return matchesSearch && matchesType;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  // Update visible page numbers
  useEffect(() => {
    const updateVisiblePages = () => {
      const maxVisiblePages = window.innerWidth < 768 ? 5 : 7;
      let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      let end = Math.min(totalPages, start + maxVisiblePages - 1);

      if (end - start + 1 < maxVisiblePages) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }

      setVisiblePages(
        Array.from({ length: end - start + 1 }, (_, i) => start + i)
      );
    };

    updateVisiblePages();
    window.addEventListener("resize", updateVisiblePages);
    return () => window.removeEventListener("resize", updateVisiblePages);
  }, [currentPage, totalPages]);

  // Type statistics
  const typeStats = {
    prefix: rootWordsData.filter((item) => item.type === "prefix").length,
    suffix: rootWordsData.filter((item) => item.type === "suffix").length,
    root: rootWordsData.filter((item) => item.type === "root").length,
    total: rootWordsData.length,
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    // Scroll to top of table
    setTimeout(() => {
      document
        .getElementById("words-table")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const renderPageNumbers = () => {
    if (totalPages <= 1) return null;

    return (
      <div className="page-numbers">
        {/* First page */}
        {visiblePages[0] > 1 && (
          <>
            <button className="page-number" onClick={() => handlePageChange(1)}>
              1
            </button>
            {visiblePages[0] > 2 && <span className="page-ellipsis">...</span>}
          </>
        )}

        {/* Visible pages */}
        {visiblePages.map((page) => (
          <button
            key={page}
            className={`page-number ${currentPage === page ? "active" : ""}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}

        {/* Last page */}
        {visiblePages[visiblePages.length - 1] < totalPages && (
          <>
            {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
              <span className="page-ellipsis">...</span>
            )}
            <button
              className="page-number"
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <header className="header">
          <h1>Greek & Latin Root Words Dictionary</h1>
          <p className="subtitle">
            300 Most Commonly Used Greek & Latin Root Words, Prefixes, &
            Suffixes
          </p>
        </header>

        <div className="dashboard">
          <div className="stats">
            <div className="stat-card">
              <span className="stat-number">{typeStats.total}</span>
              <span className="stat-label">Total Roots</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{typeStats.prefix}</span>
              <span className="stat-label">Prefixes</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{typeStats.suffix}</span>
              <span className="stat-label">Suffixes</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{typeStats.root}</span>
              <span className="stat-label">Roots</span>
            </div>
          </div>

          <div className="controls">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search root words, meanings, or examples..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="search-input"
              />
              {searchTerm && (
                <button
                  className="clear-search"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="filter-buttons">
              <button
                className={`filter-btn ${
                  selectedType === "all" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedType("all");
                  setCurrentPage(1);
                }}
              >
                All
              </button>
              <button
                className={`filter-btn ${
                  selectedType === "prefix" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedType("prefix");
                  setCurrentPage(1);
                }}
              >
                Prefixes
              </button>
              <button
                className={`filter-btn ${
                  selectedType === "suffix" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedType("suffix");
                  setCurrentPage(1);
                }}
              >
                Suffixes
              </button>
              <button
                className={`filter-btn ${
                  selectedType === "root" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedType("root");
                  setCurrentPage(1);
                }}
              >
                Roots
              </button>
            </div>
          </div>
        </div>

        <div className="table-container" id="words-table">
          <div className="table-header">
            <h2>Root Words Dictionary</h2>
            <div className="table-info">
              <p className="results-count">
                Showing {startIndex + 1}-
                {Math.min(endIndex, filteredData.length)} of{" "}
                {filteredData.length} results
                {searchTerm && ` for "${searchTerm}"`}
                {selectedType !== "all" && ` in ${selectedType}s`}
              </p>
              {totalPages > 1 && (
                <div className="page-info-mobile">
                  Page {currentPage} of {totalPages}
                </div>
              )}
            </div>
          </div>

          <div className="table-wrapper">
            <table className="words-table">
              <thead>
                <tr>
                  <th>Word Part</th>
                  <th>Type</th>
                  <th>Meaning</th>
                  <th>Examples</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item, index) => (
                  <tr key={`${item.wordPart}-${index}`}>
                    <td className="word-part">{item.wordPart}</td>
                    <td>
                      <span className={`type-badge type-${item.type}`}>
                        {item.type}
                      </span>
                    </td>
                    <td className="meaning">{item.meaning}</td>
                    <td className="examples">{item.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {paginatedData.length === 0 && (
            <div className="no-results">
              <p>No root words found matching your search.</p>
              <button
                className="reset-btn"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedType("all");
                  setCurrentPage(1);
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination-wrapper">
              <div className="pagination">
                <button
                  className="page-btn prev-btn"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                >
                  <svg
                    className="icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 12L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Previous
                </button>

                <div className="page-controls">{renderPageNumbers()}</div>

                <button
                  className="page-btn next-btn"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                >
                  Next
                  <svg
                    className="icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Page selector for mobile */}
              <div className="mobile-page-selector">
                <select
                  value={currentPage}
                  onChange={(e) => handlePageChange(parseInt(e.target.value))}
                  className="page-select"
                  aria-label="Select page"
                >
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <option key={page} value={page} className="pagenumber">
                        Page {page}
                      </option>
                    )
                  )}
                </select>
                <span className="total-pages">of {totalPages}</span>
              </div>
            </div>
          )}
        </div>

        <div className="data-info">
          <h3>Data Structure</h3>
          <p>
            The data is stored in a JavaScript array with each entry containing:
            <code>wordPart</code>, <code>meaning</code>, <code>examples</code>,
            and <code>type</code> (prefix, suffix, or root).
          </p>
          <pre className="code-block">
            {`// Example of the data structure
const rootWordsData = [
  { wordPart: "ab", meaning: "away", 
    examples: "absent, abduct, abnormal, abort", 
    type: "prefix" },
  { wordPart: "acer (acid)", meaning: "bitter, sour", 
    examples: "acerb, acerbate, acidity", 
    type: "root" },
  // ... more entries
];`}
          </pre>
        </div>

        <footer className="footer">
          <p>Greek & Latin Root Words Dictionary • Educational Resource</p>
          <p className="note">
            Note: This is a partial list showing the first 23 entries from the
            full collection of 300 root words.
          </p>
        </footer>
      </div>
      <style jsx>{`
        /* Reset and base styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #4f46e5;
          --primary-dark: #4338ca;
          --secondary: #7c3aed;
          --light-bg: #f9fafb;
          --card-bg: #ffffff;
          --text: #333333;
          --text-light: #64748b;
          --text-dark: #1e293b;
          --border: #e2e8f0;
          --shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          --radius: 12px;
          --radius-sm: 8px;
          --transition: all 0.3s ease;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, sans-serif;
          background-color: var(--light-bg);
          color: var(--text);
          line-height: 1.6;
          font-size: 16px;
        }
        pagenumber {
          font-size: 2rem;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          width: 100%;
          overflow-x: hidden;
        }

        /* Header */
        .header {
          text-align: center;
          margin-bottom: 2rem;
          padding: 2rem 1.5rem;
          background: linear-gradient(
            135deg,
            var(--primary) 0%,
            var(--secondary) 100%
          );
          color: white;
          border-radius: var(--radius);
          box-shadow: 0 10px 25px rgba(79, 70, 229, 0.2);
        }

        .header h1 {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          margin-bottom: 0.75rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .subtitle {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          opacity: 0.9;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.5;
        }

        /* Dashboard */
        .dashboard {
          background-color: var(--card-bg);
          border-radius: var(--radius);
          padding: 1.5rem;
          margin-bottom: 2rem;
          box-shadow: var(--shadow);
        }

        /* Stats */
        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .stat-card {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 1.25rem;
          border-radius: var(--radius-sm);
          text-align: center;
          border-left: 4px solid var(--primary);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100px;
        }

        .stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(79, 70, 229, 0.1);
        }

        .stat-number {
          display: block;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0.25rem;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-light);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Controls */
        .controls {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .search-box {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .search-input {
          flex: 1;
          padding: 0.875rem 1rem;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 1rem;
          transition: var(--transition);
          min-width: 0;
        }

        .search-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .clear-search {
          padding: 0.75rem 1rem;
          background-color: #ef4444;
          color: white;
          border: none;
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-weight: 600;
          font-size: 0.875rem;
          transition: var(--transition);
          white-space: nowrap;
        }

        .clear-search:hover {
          background-color: #dc2626;
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .filter-btn {
          padding: 0.625rem 1.25rem;
          background-color: #f1f5f9;
          border: none;
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--text-light);
          transition: var(--transition);
          flex: 1;
          min-width: 80px;
          text-align: center;
        }

        .filter-btn:hover {
          background-color: #e2e8f0;
        }

        .filter-btn.active {
          background-color: var(--primary);
          color: white;
        }

        /* Table Container */
        .table-container {
          background-color: var(--card-bg);
          border-radius: var(--radius);
          padding: 1.5rem;
          margin-bottom: 2rem;
          box-shadow: var(--shadow);
          overflow: hidden;
        }

        .table-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .table-header h2 {
          font-size: clamp(1.25rem, 3vw, 1.75rem);
          color: var(--text-dark);
          font-weight: 600;
        }

        .table-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
          min-width: 200px;
        }

        .results-count {
          color: var(--text-light);
          font-size: 1.875rem;
          text-align: right;
          white-space: nowrap;
        }

        .page-info-mobile {
          display: none;
          font-size: 1.875rem;
          color: var(--text-light);
          font-weight: 500;
        }

        /* Table */
        .table-wrapper {
          overflow-x: auto;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          -webkit-overflow-scrolling: touch;
        }

        .words-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
        }

        .words-table thead {
          background-color: #f8fafc;
        }

        .words-table th {
          padding: 1rem 0.875rem;
          text-align: left;
          font-weight: 600;
          color: #475569;
          border-bottom: 2px solid var(--border);
          font-size: 1.8rem;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .words-table td {
          padding: 1rem 1.875rem;
          border-bottom: 1px solid #f1f5f9;
          vertical-align: top;
        }

        .words-table tbody tr:last-child td {
          border-bottom: none;
        }

        .words-table tbody tr {
          transition: background-color 0.2s ease;
        }

        .words-table tbody tr:hover {
          background-color: #f8fafc;
        }
        .meaning {
          font-size: 2.05rem;
        }
        .word-part {
          font-weight: 700;
          color: var(--primary);
          font-size: 2.05rem;
          min-width: 120px;
        }

        .type-badge {
          display: inline-block;
          padding: 0.375rem 0.75rem;
          border-radius: 20px;
          font-size: 0.975rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .type-prefix {
          background-color: #dbeafe;
          color: #1d4ed8;
        }

        .type-suffix {
          background-color: #f0f9ff;
          color: #0c4a6e;
        }

        .type-root {
          background-color: #f0fdf4;
          color: #166534;
        }

        .examples {
          color: var(--text-light);
          min-width: 200px;
          font-size: 1.5rem;
        }

        /* No Results */
        .no-results {
          text-align: center;
          padding: 3rem 1rem;
          color: var(--text-light);
        }

        .no-results p {
          font-size: 1.1rem;
          margin-bottom: 1.25rem;
        }

        .reset-btn {
          padding: 0.75rem 1.5rem;
          background-color: var(--primary);
          color: white;
          border: none;
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-weight: 600;
          font-size: 0.875rem;
          transition: var(--transition);
        }

        .reset-btn:hover {
          background-color: var(--primary-dark);
        }

        /* Pagination */
        .pagination-wrapper {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
        }

        .pagination {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .page-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background-color: #f1f5f9;
          border: none;
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-weight: 600;
          font-size: 0.875rem;
          color: #475569;
          transition: var(--transition);
          white-space: nowrap;
        }

        .page-btn:hover:not(:disabled) {
          background-color: #e2e8f0;
          transform: translateY(-1px);
        }

        .page-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        .page-btn .icon {
          transition: var(--transition);
        }

        .page-btn:hover:not(:disabled) .icon {
          transform: translateX(-2px);
        }

        .next-btn:hover:not(:disabled) .icon {
          transform: translateX(2px);
        }

        .page-controls {
          display: flex;
          justify-content: center;
          flex: 1;
          min-width: 0;
          overflow: hidden;
          font-size: 2.875rem;
        }

        .page-numbers {
          display: flex;
          gap: 0.375rem;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          max-width: 100%;
        }

        .page-number {
          min-width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f1f5f9;
          border: none;
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-weight: 600;
          font-size: 2.875rem;
          color: #475569;
          transition: var(--transition);
          padding: 0 0.5rem;
        }

        .page-number:hover {
          background-color: #e2e8f0;
        }

        .page-number.active {
          background-color: var(--primary);
          color: white;
          box-shadow: 0 2px 8px rgba(79, 70, 229, 0.3);
        }

        .page-ellipsis {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 40px;
          height: 40px;
          color: var(--text-light);
          font-weight: 600;
          user-select: none;
        }

        /* Mobile page selector */
        .mobile-page-selector {
          display: none;
          justify-content: center;
          align-items: center;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .page-select {
          padding: 0.625rem 1rem;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
          background-color: white;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-dark);
          cursor: pointer;
          transition: var(--transition);
          min-width: 100px;
        }

        .page-select:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .total-pages {
          font-size: 0.875rem;
          color: var(--text-light);
          font-weight: 500;
        }

        /* Data Info */
        .data-info {
          background-color: var(--card-bg);
          border-radius: var(--radius);
          padding: 1.5rem;
          margin-bottom: 2rem;
          box-shadow: var(--shadow);
        }

        .data-info h3 {
          font-size: 1.25rem;
          margin-bottom: 0.875rem;
          color: var(--text-dark);
          font-weight: 600;
        }

        .code-block {
          background-color: #0f172a;
          color: #e2e8f0;
          padding: 1.25rem;
          border-radius: var(--radius-sm);
          overflow-x: auto;
          font-family: "Courier New", monospace;
          font-size: 0.85rem;
          line-height: 1.5;
          margin-top: 1rem;
          -webkit-overflow-scrolling: touch;
        }

        .code-block code {
          background-color: transparent;
          padding: 0;
        }

        /* Footer */
        .footer {
          text-align: center;
          padding: 2rem 1rem;
          color: var(--text-light);
          border-top: 1px solid var(--border);
          margin-top: 2rem;
        }

        .note {
          font-size: 0.875rem;
          margin-top: 0.5rem;
          font-style: italic;
          opacity: 0.8;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .container {
            padding: 1rem;
          }

          .stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .header {
            padding: 1.5rem 1rem;
            margin-bottom: 1.5rem;
          }

          .header h1 {
            font-size: 1.5rem;
          }

          .subtitle {
            font-size: 0.95rem;
          }

          .dashboard {
            padding: 1.25rem;
          }

          .table-container {
            padding: 1.25rem;
          }

          .table-header {
            flex-direction: column;
            align-items: stretch;
          }

          .table-info {
            align-items: stretch;
            min-width: auto;
          }

          .results-count {
            text-align: left;
          }

          .page-info-mobile {
            display: block;
          }

          .pagination {
            flex-direction: column;
            gap: 0.75rem;
          }

          .page-btn {
            width: 100%;
            justify-content: center;
          }

          .page-controls {
            order: 3;
            width: 100%;
          }

          .page-numbers {
            justify-content: center;
            gap: 0.25rem;
          }

          .page-number {
            min-width: 36px;
            height: 36px;
            font-size: 0.8rem;
          }

          .page-ellipsis {
            min-width: 36px;
            height: 36px;
          }

          .mobile-page-selector {
            display: flex;
          }

          .data-info,
          .footer {
            padding: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0.75rem;
          }

          .header {
            padding: 1.25rem 0.75rem;
            margin-bottom: 1rem;
          }

          .header h1 {
            font-size: 1.35rem;
          }

          .stats {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }

          .stat-card {
            padding: 1rem;
            min-height: 85px;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .dashboard {
            padding: 1rem;
          }

          .search-box {
            flex-direction: column;
            align-items: stretch;
          }

          .clear-search {
            width: 100%;
          }

          .filter-buttons {
            flex-direction: column;
          }

          .filter-btn {
            width: 100%;
          }

          .table-container {
            padding: 1rem;
            margin-bottom: 1rem;
          }

          .words-table th,
          .words-table td {
            padding: 0.75rem 0.5rem;
            font-size: 0.85rem;
          }

          .word-part {
            font-size: 1rem;
          }

          .type-badge {
            font-size: 0.7rem;
            padding: 0.25rem 0.5rem;
          }

          .pagination-wrapper {
            margin-top: 1.5rem;
            padding-top: 1rem;
          }

          .page-number {
            min-width: 32px;
            height: 32px;
            font-size: 0.75rem;
          }

          .page-ellipsis {
            min-width: 32px;
            height: 32px;
            font-size: 0.75rem;
          }

          .code-block {
            padding: 1rem;
            font-size: 0.8rem;
          }

          .footer {
            padding: 1.5rem 0.75rem;
          }
        }

        @media (max-width: 360px) {
          .stat-card {
            min-height: 75px;
          }

          .stat-number {
            font-size: 1.35rem;
          }

          .words-table th,
          .words-table td {
            padding: 0.5rem 0.375rem;
            font-size: 0.8rem;
          }

          .page-number {
            min-width: 28px;
            height: 28px;
            font-size: 0.7rem;
          }
        }

        /* High contrast and accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
            animation: none !important;
          }
        }

        /* Print styles */
        @media print {
          .header,
          .controls,
          .pagination,
          .mobile-page-selector,
          .footer {
            display: none;
          }

          .table-container {
            box-shadow: none;
            border: 1px solid #ddd;
          }

          .words-table {
            min-width: auto;
          }
        }
      `}</style>
    </>
  );
}
