import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Details from './details';
import useProjectDetails from '../../../hooks/useProjectDetails';
import useFavoriteProjects from '../../../hooks/useFavoriteProjects';
import { Project } from '../../../interfaces/project';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../../hooks/useProjectDetails');
jest.mock('../../../hooks/useFavoriteProjects');

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Details Component', () => {
  const mockFetchProjectDetails = jest.fn();
  const mockUpdateProjectDetails = jest.fn();
  const mockSaveProject = jest.fn();
  const mockToggleFavoriteProject = jest.fn();

  const mockProject: Project = {
    id: '123',
    title: 'Test Project',
    description: 'This is a test project.',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    projectManager: 'John Doe',
    isFavorite: false,
  };

  beforeEach(() => {
    (useProjectDetails as jest.Mock).mockReturnValue({
      action: 'edit',
      project: mockProject,
      fetchProjectDetails: mockFetchProjectDetails,
      updateProjectDetails: mockUpdateProjectDetails,
      saveProject: mockSaveProject,
    });

    (useFavoriteProjects as jest.Mock).mockReturnValue({
      toggleFavoriteProject: mockToggleFavoriteProject,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders project details correctly', () => {
    render(
      <MemoryRouter>
        <Details />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/Project ID/i)).toHaveValue(mockProject.id);
    expect(screen.getByLabelText(/Project Name/i)).toHaveValue(mockProject.title);
    expect(screen.getByLabelText(/Description/i)).toHaveValue(mockProject.description);
    expect(screen.getByLabelText(/Start Date/i)).toHaveValue(mockProject.startDate);
    expect(screen.getByLabelText(/End Date/i)).toHaveValue(mockProject.endDate);
    expect(screen.getByLabelText(/Project Manager/i)).toHaveValue(mockProject.projectManager);
  });

  test('handles save button click for editing a project', () => {
    render(
      <MemoryRouter>
        <Details />
      </MemoryRouter>
    );

    const saveButton = screen.getByRole('button', { name: /Update/i });
    fireEvent.click(saveButton);

    expect(mockUpdateProjectDetails).toHaveBeenCalledWith(mockProject);
  });

  test('handles back button click', () => {
    (useProjectDetails as jest.Mock).mockReturnValue({
      action: 'view',
      project: mockProject,
      fetchProjectDetails: mockFetchProjectDetails,
      updateProjectDetails: mockUpdateProjectDetails,
      saveProject: mockSaveProject,
    });

    render(
      <MemoryRouter>
        <Details />
      </MemoryRouter>
    );

    const backButton = screen.getByRole('button', { name: /Back/i });
    fireEvent.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  test('handles edit button click', () => {
    (useProjectDetails as jest.Mock).mockReturnValue({
      action: 'view',
      project: mockProject,
      fetchProjectDetails: mockFetchProjectDetails,
      updateProjectDetails: mockUpdateProjectDetails,
      saveProject: mockSaveProject,
    });

    render(
      <MemoryRouter>
        <Details />
      </MemoryRouter>
    );

    const editButton = screen.getByRole('button', { name: /Edit/i });
    fireEvent.click(editButton);

    expect(mockNavigate).toHaveBeenCalledWith(`/projects/${mockProject.id}/edit`);
  });

  test('toggles favorite project', () => {
    render(
      <MemoryRouter>
        <Details />
      </MemoryRouter>
    );

    const favoriteCheckbox = screen.getByLabelText(/Favorite/i);
    fireEvent.click(favoriteCheckbox);

    expect(mockToggleFavoriteProject).toHaveBeenCalledWith({
      ...mockProject,
      isFavorite: true,
    });
    expect(mockUpdateProjectDetails).toHaveBeenCalledWith({
      ...mockProject,
      isFavorite: true,
    });
  });

  test('fetches project details on mount', () => {
    render(
      <MemoryRouter>
        <Details />
      </MemoryRouter>
    );

    expect(mockFetchProjectDetails).toHaveBeenCalled();
  });
});
