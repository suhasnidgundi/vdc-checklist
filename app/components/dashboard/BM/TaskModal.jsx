import React, { useState, useEffect } from "react";

// Task Modal
const TaskModal = ({ 
  modalMode, 
  selectedTask, 
  isModalOpen, 
  setIsModalOpen, 
  createMutation, 
  updateMutation 
}) => {
  const [formData, setFormData] = useState({
    branch_name: '',
    cluster_name: '',
    zone_name: ''
  });

  // Update formData when selectedTask changes
  useEffect(() => {
    if (modalMode === 'edit' && selectedTask) {
      setFormData({
        branch_name: selectedTask.branch_name || '',
        cluster_name: selectedTask.cluster_name || '',
        zone_name: selectedTask.zone_name || ''
      });
    } else {
      // Reset form when adding new task
      setFormData({
        branch_name: '',
        cluster_name: '',
        zone_name: ''
      });
    }
  }, [modalMode, selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modalMode === 'edit') {
      updateMutation.mutate({ 
        id: selectedTask.mid, 
        updatedTask: formData 
      });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div 
      className={`modal ${isModalOpen ? 'show d-block' : ''}`} 
      tabIndex="-1" 
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {modalMode === 'edit' ? 'Edit Task' : 'Add Task'}
            </h5>
            <button 
              type="button" 
              className="close" 
              onClick={() => setIsModalOpen(false)}
            >
              <span>&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="form-group">
                <label>Branch Name</label>
                <input
                  type="text"
                  name="branch_name"
                  className="form-control"
                  value={formData.branch_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Cluster Name</label>
                <input
                  type="text"
                  name="cluster_name"
                  className="form-control"
                  value={formData.cluster_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Zone Name</label>
                <input
                  type="text"
                  name="zone_name"
                  className="form-control"
                  value={formData.zone_name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={createMutation.isPending || updateMutation.isPending}
              >
                {modalMode === 'edit' ? 'Update' : 'Create'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;