const SkeletonLoader = () => (
    <tr>
        {[1, 2, 3, 4, 5, 6].map((col) => (
            <td key={col}>
                <div className="skeleton-loader"></div>
            </td>
        ))}
    </tr>
);