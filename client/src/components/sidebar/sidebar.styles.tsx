/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

// Sidebar Wrapper
export const SidebarWrapper = styled.div`
  width: 250px;
  background-color: #f8f9fa;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #cbd5e0;
    border-radius: 4px;
  }
  top: 64px;
`;

// Top-Level List Item
export const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s, box-shadow 0.2s;

  &:hover {
    background-color: #edf2f7;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

// Text for Top-Level Items
export const StyledListItemText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
`;

// Collapse Content Wrapper
export const CollapseContent = styled.div`
  padding-left: 20px;
  margin-top: 8px;
`;

// Child Items in Collapsible List
export const CollapseContentItem = styled.div<{ active: boolean }>`
  padding: 10px 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ active }) => (active ? "#2b6cb0" : "#4a5568")};
  background-color: ${({ active }) => (active ? "#ebf8ff" : "transparent")};
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #edf2f7;
  }
`;
