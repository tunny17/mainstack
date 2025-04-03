interface AnalyticsIconProps {
  isActive: boolean;
}

const AnalyticsIcon: React.FC<AnalyticsIconProps> = ({ isActive = true }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_1062_606"
        style={{
          maskType: 'alpha'
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <rect width="20" height="20" fill={isActive ? 'white' : '#D9D9D9'} />
      </mask>
      <g mask="url(#mask0_1062_606)">
        <path
          d="M6.69827 13.9749C6.82716 13.9749 6.93487 13.9307 7.0214 13.8424C7.10794 13.7541 7.15121 13.6436 7.15121 13.511V9.13117C7.15121 9.00963 7.10631 8.90432 7.01652 8.81525C6.92673 8.7262 6.82052 8.68167 6.6979 8.68167C6.56422 8.68167 6.4541 8.7262 6.36756 8.81525C6.28103 8.90432 6.23777 9.00963 6.23777 9.13117V13.511C6.23777 13.6436 6.2823 13.7541 6.37135 13.8424C6.46042 13.9307 6.5694 13.9749 6.69827 13.9749ZM10.0092 13.9749C10.138 13.9749 10.2458 13.9307 10.3323 13.8424C10.4188 13.7541 10.4621 13.6436 10.4621 13.511V6.47894C10.4621 6.35738 10.4172 6.25208 10.3274 6.16302C10.2376 6.07395 10.1314 6.02942 10.0088 6.02942C9.87511 6.02942 9.765 6.07395 9.67846 6.16302C9.59192 6.25208 9.54865 6.35738 9.54865 6.47894V13.511C9.54865 13.6436 9.59318 13.7541 9.68225 13.8424C9.77132 13.9307 9.88029 13.9749 10.0092 13.9749ZM13.3136 13.9749C13.4425 13.9749 13.5502 13.9307 13.6368 13.8424C13.7233 13.7541 13.7666 13.6436 13.7666 13.511V11.7241C13.7666 11.6078 13.7217 11.5038 13.6319 11.4121C13.5421 11.3204 13.4359 11.2746 13.3133 11.2746C13.1796 11.2746 13.0695 11.3204 12.9829 11.4121C12.8964 11.5038 12.8531 11.6078 12.8531 11.7241V13.511C12.8531 13.6436 12.8977 13.7541 12.9867 13.8424C13.0758 13.9307 13.1848 13.9749 13.3136 13.9749ZM4.14452 17.0278C3.83065 17.0278 3.55752 16.9116 3.32515 16.6792C3.09276 16.4468 2.97656 16.1737 2.97656 15.8598V4.14452C2.97656 3.83065 3.09276 3.55752 3.32515 3.32515C3.55752 3.09276 3.83065 2.97656 4.14452 2.97656H15.8598C16.1737 2.97656 16.4468 3.09276 16.6792 3.32515C16.9116 3.55752 17.0278 3.83065 17.0278 4.14452V15.8598C17.0278 16.1737 16.9116 16.4468 16.6792 16.6792C16.4468 16.9116 16.1737 17.0278 15.8598 17.0278H4.14452ZM4.14642 16.1143H15.8579C15.922 16.1143 15.9808 16.0876 16.0342 16.0342C16.0876 15.9808 16.1143 15.922 16.1143 15.8579V4.14642C16.1143 4.08232 16.0876 4.02356 16.0342 3.97012C15.9808 3.91671 15.922 3.89 15.8579 3.89H4.14642C4.08232 3.89 4.02356 3.91671 3.97013 3.97012C3.91671 4.02356 3.89 4.08232 3.89 4.14642V15.8579C3.89 15.922 3.91671 15.9808 3.97013 16.0342C4.02356 16.0876 4.08232 16.1143 4.14642 16.1143Z"
          fill={isActive ? 'white' : '#56616B'}
        />
      </g>
    </svg>
  );
};

export default AnalyticsIcon;
