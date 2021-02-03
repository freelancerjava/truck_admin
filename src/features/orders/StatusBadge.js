import React from 'react';
import PropTypes from 'prop-types';

const StatusBadge = ({status}) => {
    return (
        <div>
            {(status === 'new') && <span className={`status-badge ${status}-order`}>Новый</span>}
            {(status === 'accepted') && <span className={`status-badge ${status}-order`}>Принятые</span>}
            {(status === 'on_the_way') && <span className={`status-badge ${status}-order`}>Выполняются</span>}
            {(status === 'completed') && <span className={`status-badge ${status}-order`}>Завершенные</span>}
            {(status === 'closed') && <span className={`status-badge ${status}-order`}>Закрытые</span>}
            {(status === 'canceled') && <span className={`status-badge ${status}-order`}>Отмененные</span>}
        </div>
    );
};

StatusBadge.propTypes = {};

export default StatusBadge;