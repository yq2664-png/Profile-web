export default function ProjectMeta({ items, actionLink }) {
  return (
    <div className="meta-bar">
      {items.map((item) => (
        <div className="meta-item" key={item.label}>
          <div className="meta-label">{item.label}</div>
          <div className="meta-value">{item.value}</div>
        </div>
      ))}
      {actionLink ? (
        <a
          href={actionLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="meta-action pnav-pdf"
        >
          {actionLink.label}
        </a>
      ) : null}
    </div>
  );
}
