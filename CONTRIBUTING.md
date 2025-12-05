# Contributing to sstocode

Thank you for your interest in contributing to sstocode! This guide will help you get started with contributing to our AI-powered design-to-code platform.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/pnpm
- Git
- Gemini API key (for AI generation)

### Setup
```bash
git clone https://github.com/your-username/sstocode.git
cd sstocode
npm install
cp .env.local.example .env.local
# Add your GEMINI_API_KEY to .env.local
npm run dev
```

## 📋 How to Contribute

### 1. Choose an Issue
- Check our [Roadmap](./ROADMAP.md) for planned features
- Look for issues labeled `good first issue` or `help wanted`
- Comment on the issue to let others know you're working on it

### 2. Fork and Branch
```bash
git fork https://github.com/original-repo/sstocode.git
git checkout -b feature/your-feature-name
```

### 3. Development Guidelines

#### Code Style
- Use TypeScript for all new code
- Follow existing naming conventions
- Use Tailwind CSS for styling
- Keep components small and focused

#### File Structure
```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable UI components
├── lib/                # Utility functions and configurations
└── types/              # TypeScript type definitions
```

#### Component Guidelines
```tsx
// ✅ Good: Functional component with TypeScript
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-2 rounded ${variant === 'primary' ? 'bg-blue-500' : 'bg-gray-500'}`}
    >
      {children}
    </button>
  );
}
```

### 4. Testing
```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Test the application
npm run dev
```

## 🎯 Contribution Areas

### 🟢 Beginner Friendly
- **UI Improvements**: Enhance existing components, fix styling issues
- **Documentation**: Update README, add code comments, write tutorials
- **Bug Fixes**: Fix small bugs, improve error messages
- **Testing**: Add unit tests, improve test coverage

### 🟡 Intermediate
- **New Features**: Implement features from the roadmap
- **AI Integration**: Add new AI providers or improve existing ones
- **Performance**: Optimize image processing, reduce bundle size
- **API Development**: Build new endpoints, improve existing ones

### 🔴 Advanced
- **Architecture**: Improve code structure, add design patterns
- **Security**: Implement security measures, audit code
- **Infrastructure**: Set up CI/CD, monitoring, deployment
- **Complex Features**: Multi-file generation, real-time collaboration

## 📝 Pull Request Process

### Before Submitting
- [ ] Code follows project conventions
- [ ] All tests pass
- [ ] No TypeScript errors
- [ ] Feature works in development environment
- [ ] Updated documentation if needed

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] Added/updated tests
- [ ] All existing tests pass

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
```

### Review Process
1. Automated checks must pass
2. At least one maintainer review required
3. Address feedback and update PR
4. Maintainer will merge when approved

## 🛠️ Development Tips

### Working with AI Generation
```typescript
// Adding a new AI provider
class NewAIProvider implements AIProvider {
  name = 'New Provider';
  id = 'new-provider';
  
  async generate(imageBuffer: Buffer, prompt: string): Promise<string> {
    // Implementation
  }
  
  isAvailable(): boolean {
    return !!process.env.NEW_PROVIDER_API_KEY;
  }
}
```

### Adding New Features
1. Create feature branch: `feature/settings-panel`
2. Add components in appropriate directories
3. Update types if needed
4. Test thoroughly
5. Update documentation

### Debugging
- Use browser dev tools for frontend issues
- Check server logs for API issues
- Use `console.log` for debugging (remove before PR)
- Test with different image types and sizes

## 🐛 Bug Reports

### Good Bug Report
```markdown
**Bug Description**
Clear description of the issue

**Steps to Reproduce**
1. Upload image
2. Click generate
3. See error

**Expected Behavior**
What should happen

**Screenshots**
Add screenshots if helpful

**Environment**
- OS: macOS/Windows/Linux
- Browser: Chrome/Firefox/Safari
- Version: Latest/specific version
```

## 💡 Feature Requests

### Good Feature Request
```markdown
**Feature Description**
Clear description of the feature

**Use Case**
Why is this feature needed?

**Proposed Solution**
How should it work?

**Alternatives**
Other ways to solve the problem

**Additional Context**
Screenshots, mockups, examples
```

## 📚 Resources

### Learning Materials
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)

### Project-Specific
- [Roadmap](./ROADMAP.md) - Future plans
- [Architecture](./docs/ARCHITECTURE.md) - System design
- [API Documentation](./docs/API.md) - API reference

## 🤝 Community

### Communication
- GitHub Issues for bugs and features
- GitHub Discussions for questions
- Discord/Slack for real-time chat (if available)

### Need Help?
If you have any problems or questions:
- **Email**: koustavganguly24@gmail.com
- **Website**: [iamk.xyz](https://iamk.xyz)
- **Twitter**: [@iamk_xyz](https://x.com/iamk_xyz)

### Code of Conduct
- Be respectful and inclusive
- Help others learn and grow
- Focus on constructive feedback
- Follow GitHub's community guidelines

## 🏆 Recognition

### Contributors
All contributors will be:
- Added to the contributors list
- Mentioned in release notes
- Invited to contributor Discord (if available)

### Maintainers
Active contributors may be invited to become maintainers with:
- Commit access
- Review responsibilities
- Decision-making participation

---

**Questions?** Open an issue or start a discussion. We're here to help!

**Thank you for contributing to sstocode!** 🎉
