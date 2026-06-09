# Contributing Guidelines

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help fellow contributors
- Report issues responsibly

## How to Contribute

### 1. Fork & Clone

```bash
git clone https://github.com/YOUR_USERNAME/assistant-alcoholic.git
cd assistant-alcoholic
```

### 2. Create Feature Branch

```bash
git checkout -b feature/feature-name
```

Use descriptive branch names:
- `feature/add-drink-categories` for new features
- `bugfix/fix-login-error` for bug fixes
- `docs/update-readme` for documentation

### 3. Make Changes

- Write clean, readable code
- Add TypeScript types
- Follow existing patterns
- Keep commits focused

### 4. Test Locally

```bash
npm run dev
npm run lint
npm run type-check
```

### 5. Commit Messages

Follow conventional commits:

```
feat: add new feature
fix: resolve issue
docs: update documentation
style: improve code style
refactor: reorganize code
test: add tests
chore: update dependencies
```

### 6. Push & Create PR

```bash
git push origin feature/feature-name
```

Create Pull Request with:
- Clear title
- Description of changes
- Related issues
- Screenshots if applicable

## Code Standards

### TypeScript
- Use strict mode
- Define proper types
- Avoid `any` type
- Export interfaces

### Components
- Functional components only
- Use React hooks
- Memoize when needed
- Document props

### Styling
- Use Tailwind CSS classes
- Follow design system
- Mobile-first approach
- Test responsiveness

### Performance
- Code splitting
- Lazy loading
- Image optimization
- Memoization where needed

## Testing

### Unit Tests (Future)
```bash
npm run test
```

### Manual Testing
1. Test on multiple devices
2. Test with different browsers
3. Test edge cases
4. Verify error handling

## Documentation

- Update README for major changes
- Document new features
- Add code comments for complex logic
- Keep docs up-to-date

## Getting Help

- Check existing issues
- Read documentation
- Ask in discussions
- Comment on relevant issues

## Pull Request Process

1. ✅ Tests pass
2. ✅ Code is linted
3. ✅ Types are correct
4. ✅ Documentation updated
5. ✅ Commit messages clear
6. Review & approval
7. Merge to develop

## Release Process

1. Create release branch from develop
2. Update version in package.json
3. Update CHANGELOG.md
4. Merge to main
5. Create GitHub release
6. Deploy to production
